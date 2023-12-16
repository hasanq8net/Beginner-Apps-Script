/**
 * Example Comments:
 * 
 * Lessons:
 * 1. what are arrays ✓
 * 2. accessing arrays ✓
 * 3. Destructuring arrays ✓
 * 4. adding elements ✓
 * 5. removing elements ✓
 * 6. reversing and sorting arrays ✓
 * 7. 2-d arrays and flattening arrays ✓
 * 8. Merging arrays ✓
 * 
 * https://developers.google.com/apps-script/guides/services/authorization
 * 
 * 
 * TO DO:
 *  - Create slides
 *  - Record video
 *  - Edit video
 * 
 * Use slides to explain mutable vs. immutable concept, 
 * something like this (use animation):
 * [🟦,🟦,🟦] mutates original array to [🟦,🟦,🟦,🟦]
 * 
 * [🟦,🟦,🟦] immutable makes new array [🟩,🟩,🟩]
 */
function complexFunction() {

  // get the sheet

  // remove blank rows

  // break apart the merged cells

  // add filter

  // apply filter to rows>1000

  // add chart


}

/**
 * @OnlyCurrentDoc
 */
function test() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  console.log(ss.getName());
}

/**
 * Function to calculate total cost including sales tax
 * JSDoc comments
 * 
 * @param {number} price the price input
 * @param {number} taxRate the tax rate to apply
 * @return {number} total the price plus sales tax
 * 
 * @customfunction
 */
function PRICECALC(price, taxRate) {

  /* calculate sales tax
  this is a single line comment
  but this is not part of that comment */
  const salesTax = price * taxRate;

  // calculate total
  const total = price + salesTax;

  // function returns new total value including sales tax
  return total; 
}
