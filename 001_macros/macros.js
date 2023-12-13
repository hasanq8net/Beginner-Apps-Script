/** @OnlyCurrentDoc */

function ResetInvoice() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A4').activate();
  spreadsheet.getActiveRangeList().clear({contentsOnly: true, skipFilteredRows: true});
  spreadsheet.getRange('E3').activate();
  spreadsheet.getActiveRangeList().clear({contentsOnly: true, skipFilteredRows: true});
  spreadsheet.getRange('E5').activate();
  spreadsheet.getActiveRangeList().clear({contentsOnly: true, skipFilteredRows: true});
  spreadsheet.getRange('B8:D11').activate();
  spreadsheet.getActiveRangeList().clear({contentsOnly: true, skipFilteredRows: true});
  spreadsheet.getRange('E14').activate();
  spreadsheet.getCurrentCell().setValue('0%');
  spreadsheet.getRange('E15').activate();
};
