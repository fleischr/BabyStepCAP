# Baby Step into SAP CAP

Trying to learn how to build full-stack apps SAP CAP? This repo gives you checklist of activities to create a simple CAP application called the Baby Step Bookstore. Let's begin.

## Pre-requisities
SAP Business Application Studio - or local desktop environment that passes the "Batman test" for SAP BTP dev readiness

## Steps

### I. Create a directory
```
mkdir babystepcap
cd babystepcap
```

### II. Start from the CDS bookshop sample
```
cds init
cds add tiny-sample
```
Observe how you now have 3 subdirectories: app, db, and srv. We will be inspecting and extending each one later on!

### III. Run the CAP application and see whats already there
```
cds watch
```
This will automatically run your cap service from you local machine.

You can now check out the content of the books entity, and a Fiori elements app preview as well!
Tip: If you have issues running locally - note that some command line environments (ex: Git bash on windows) may not full admin privileges to start and run a web server. Use windows terminal or powershell instead.

You can exit by closing the terminal or pressing ctrl+c while having terminal window selected

### IV. Intro to the db component
This component by its namesake is for database modeling and connectivity - as well as general high level database modeling.

We can observe in the file schema.cds - the books entity we just saw in the oData service.

We also see in my.bookshop-Books.csv the data we see in the application earlier. For locally-run applications, CAP can use CSV to mock data sets. Pretty neat huh?

If you add more data to the file - you'll see in the service.

Naturally - we can extend both the data model and the file (and we should keep them in sync too).

Here's the example I'd like you to follow:

Change schema.cds from this
```
```
to this
```
namespace my.bookshop;

entity Books {
  key ID : Integer;
  title  : String;
  stock  : Integer;
  author : String;
  price  : Decimal(15, 2);
  currency : String;
  status: Integer;
  statusText: String;
  ISBN: String;
}
```

And copy paste this into Books.csv
```
ID,title,stock,author,price,currency,status,statusText,ISBN
1,Wuthering Heights,100,Emily Bronte,15.99,USD,0,Available,978-2-2699-9980-6
2,Jane Eyre,500,Charlotte Bronte,12.59,USD,0,Available,978-3-4313-7281-6
3,SoftWar,1,Jason Lowery,210.00,USD,2,Shipments on hold,978-4-8987-5746-8
4,Hand Hand Fingers Thumb,250,Al Perkins,4.77,USD,1,Clearance,978-0-3774-3487-5
5,Mastery,120,Robert Greene,39.99,USD,1,Missing Stock,978-1-6010-3444-1
```

When we run ```cds watch``` again we see an updated data model and data represented.

### V. Intro to the srv component

### VI. Intro The app component
As we're building upon SAP landscapes - we have

From your CAP project root directory, start the Yeoman generator
```
yo
```
and select @sap/fiori

### VII. Full stack - backend examples

### VIII. Full stack - frontend to backend integration

### IX. Using a non-sap Node.js module example (Encryption)
