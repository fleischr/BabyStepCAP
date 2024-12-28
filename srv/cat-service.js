const cds = require('@sap/cds');
const crypto = require('crypto');

const ENCRYPTION_KEY = crypto.createHash('sha256') // Derive a key from the passphrase
  .update('BabyCapBookstore')
  .digest('base64')
  .substring(0, 32);
const IV = Buffer.from("1234567890abcdef","utf-8");

module.exports = cds.service.impl(async function () {
  this.on('getExternalHash', async (req) => {
    const { productID } = req.data;

    if (!productID) {
      req.error(400, 'Missing productID parameter');
    }

    // Fetch the book record
    const db = await cds.connect.to('db');
    const result = await db.read('my.bookshop.Books').where({ ID: productID });

    if (result.length === 0) {
      req.error(404, `No book found with ID ${productID}`);
    }

    // Simulate creating a hash
    const book = result[0];
    const dataToHash = `${book.ID || ''}|${book.ISBN || ''}`;

    // Generate a SHA-256 hash
    const hash = crypto.createHash('sha256').update(dataToHash).digest('hex');

    // Encrypt the hash
    const cipher = crypto.createCipheriv('aes-256-cbc', ENCRYPTION_KEY, IV);
    let encrypted = cipher.update(hash, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    // Return the encrypted data along with the IV (needed for decryption)
    return {
      iv: IV.toString('hex'),
      encryptedData: encrypted,
    };
  });
});