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
