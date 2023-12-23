/**
 * Lesson 1: Getting data in and out of Sheets
 */
function sheetData1() {

  // get the Sheet
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Sheet1');
  //const sheet = SpreadsheetApp.getActiveSheet();

  // get data range
  //const range = sheet.getDataRange();
  const range = sheet.getRange('A1:H21');
  //console.log(range.getA1Notation()); //	A1:H21

  // get the values
  const values = range.getValues();
  //console.log(values);

  // new row
  const newRow = [
    [21,'House','Website','Buyer','Ben Collins',250000,0.01,'']
  ];
  
  // add row to sheet
  //sheet.getRange(22,1,1,8).setValues(newRow);

  // append row
  //console.log(newRow[0]);
  //sheet.appendRow(newRow[0]);

  // calculate the last row
  const lastRow = sheet.getLastRow();
  console.log(lastRow); // 22

  // create multiple new rows
  const newRows = [
    [lastRow,'Townhouse','Website','Buyer','Ben Collins',350000,0.04,''],
    [lastRow + 1,'Condo','PPC','Seller','Ben Collins',225000,0.02,'']
  ];
  console.log(newRows);
  console.log(newRows.length);
  console.log(newRows[0].length);

  // paste in the new rows
  sheet.getRange(lastRow + 1,1,newRows.length,newRows[0].length).setValues(newRows);

}

/**
 * lesson 2: formatting data
 */
function sheetData2() {

  // get the sheet
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Sheet1');
  const lastRow = sheet.getLastRow();

  // create the formats
  const rowFormats = [
    ['#','@','@','@','@','$#,##0','0.00%','@'],
    ['#','@','@','@','@','$#,##0','0.00%','@'],
    ['#','@','@','@','@','$#,##0','0.00%','@']
  ];

  // apply them
  sheet.getRange(lastRow-2,1,3,8).setNumberFormats(rowFormats);

  // center align column A
  sheet.getRange(lastRow-2,1,3).setHorizontalAlignments([
    ['center'],
    ['center'],
    ['center']
  ]);

  // apply row banding
  const range = sheet.getDataRange();
  //console.log(range.getBandings()); // 	[] if there are no bandings on the data
  if (range.getBandings().length === 0) {
    range.applyRowBanding(SpreadsheetApp.BandingTheme.ORANGE,true,false);
  }

  // tidy the headers
  sheet.getRange(1,1,1,8)
    .setFontColor('white')
    .setFontFamily('Montserrat')
    .setFontSize(12);
  
}

/**
 * lesson 3: formulas
 */
function sheetData3() {

  const sheet = SpreadsheetApp.getActiveSheet();

  // add a single formula
  //sheet.getRange(22,8).setFormula('=F22*G22').setNumberFormat('$#,##0');

  // r1c1 notation
  //sheet.getRange(22,8).setFormulaR1C1('=R[0]C[-2]*R[0]C[-1]').setNumberFormat('$#,##0');

  // multiple formulas
  /* sheet.getRange(sheet.getLastRow()-1,8,2).setFormulasR1C1([
    ['=R[0]C[-2]*R[0]C[-1]'],
    ['=R[0]C[-2]*R[0]C[-1]']
  ]).setNumberFormats([
    ['$#,##0'],
    ['$#,##0']
  ]); */

  // autofill formula option
  const sourceRange = sheet.getRange(2,8);
  const fillRange = sheet.getRange(2,8,sheet.getLastRow()-1,1);
  sourceRange.autoFill(fillRange,SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);

}

/**
 * lesson 4: filters and pivot tables
 */
function sheetData4() {

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  const range = sheet.getDataRange();

  // check if there are any filters
  // 	null when no filter
  //console.log(range.getFilter());
  //console.log(Boolean(range.getFilter())); // true when filter is present, false when not there

  // add filter 
  if (!range.getFilter()) {
    // add the filter
    range.createFilter();
  }

  // find the range of the filter
  console.log(sheet.getFilter().getRange().getA1Notation());

  // do some filtering
  const filter = sheet.getFilter();

  /* // sort on price, high to low
  filter.sort(6,false);

  // filtering
  const criteria = SpreadsheetApp.newFilterCriteria().whenNumberGreaterThan(600000);
  filter.setColumnFilterCriteria(6,criteria); */

  // clear filter
  /* filter.removeColumnFilterCriteria(6);
  filter.sort(1,true); */

  // remove filter
  filter.remove();

  // pivot tables
  const pivotSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet2');
  const pivotAnchorCell = pivotSheet.getRange(1,1);

  // create pivot table
  //const newPivotTable = pivotAnchorCell.createPivotTable(range);
  const pivotTable = pivotSheet.getPivotTables()[0];

  // build pivot table
  pivotTable.addRowGroup(4);
  pivotTable.addColumnGroup(3);
  pivotTable.addPivotValue(6,SpreadsheetApp.PivotTableSummarizeFunction.SUM);

}

/**
 * lesson 5: charts
 */
function sheetData5() {

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Sheet1');

  // get charts
  // [] if no charts
  const charts = sheet.getCharts();
  //console.log(charts);

  // remove charts
  charts.forEach(chart => sheet.removeChart(chart));

  // build a chart
  let salesChart = sheet.newChart()
    .setChartType(Charts.ChartType.PIE)
    .addRange(sheet.getRange('D1:D24'))
    .addRange(sheet.getRange('F1:F24'))
    .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_COLUMNS)
    .setOption('title','Sales Pie Chart')
    .setOption('applyAggregateData',0)
    .setPosition(1,10,1,1)
    .build();

  // then insert chart
  sheet.insertChart(salesChart);

  // modify a chart
  salesChart = salesChart.modify()
    .asColumnChart()
    .clearRanges()
    .addRange(sheet.getRange('C2:C24'))
    .addRange(sheet.getRange('F2:F24'))
    .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_COLUMNS)
    .setOption('title','Sales Column Chart')
    .setOption('applyAggregateData',0)
    .setPosition(1,10,1,1)
    .build();

  sheet.updateChart(salesChart);

}

/**
 * lesson 6: backup in same Sheet
 */
function sheetData6() {

  // setup
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheets = ss.getSheets();
  const sheet = ss.getSheetByName('Sheet1');
  const range = sheet.getDataRange();
  const values = range.getValues();

  // check if sheet called 'backup' exists
  sheets.forEach(sheet => console.log(sheet.getName()));
  console.log(sheets.some(sheet => sheet.getName() === 'backup'));

  // if no backup sheet, create one
  if (!sheets.some(sheet => sheet.getName() === 'backup')) {
    // create the backup sheet
    ss.insertSheet().setName('backup');
  }

  // get hold of backup sheet
  const backupSheet = ss.getSheetByName('backup');

  // copy in the data
  const backupRange = backupSheet.getRange(1,1,values.length,values[0].length);
  range.copyTo(backupRange);

}


/**
 * lesson 7: backup file
 */
function sheetData7() {

  // setup
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // get the timestamp
  const date = new Date();
  //console.log(date);

  // copy the Sheet
  //console.log('Backup of ' + ss.getName() + ' - ' + date);
  const backupFile = ss.copy('Backup of ' + ss.getName() + ' - ' + date);

  // move to a backup folder
  const backupFolderId = '19ZtgdIGMZjJu2KwvSW4_0TjutBz6xfjK';
  const backupFolder = DriveApp.getFolderById(backupFolderId);

  // move to the folder
  const backupFileId = backupFile.getId();
  const backupFileInDrive = DriveApp.getFileById(backupFileId);
  backupFileInDrive.moveTo(backupFolder);

}

