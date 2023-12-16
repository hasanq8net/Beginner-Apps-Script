function myFunction() {
  const name = SpreadsheetApp.getActiveSpreadsheet().getName();
  console.log(name);


  // send an email
  GmailApp.sendEmail('hassanq8ireland@gmail.com','Hi','Hi from the permissions script!');
}
