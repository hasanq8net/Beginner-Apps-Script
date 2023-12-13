function myFunction() {
  
  // get the sheet object
  const sheet = SpreadsheetApp.getActiveSheet();

  // clear out the invoice
  sheet.getRange('A4').clearContent();
  sheet.getRange('E3').clearContent();
  sheet.getRange('E5').clearContent();
  sheet.getRange('B8:D11').clearContent();
  sheet.getRange('E14').setValue(0);

}
