function loopTesting2() {
  
  // create array
  const someValues = [1, 3, 5, 18, 9, 3, 12];

  // filter
  /* const greaterThanTen = someValues.filter(function(el) {
    return el > 10;
  }); */
  /* const greaterThanTen = someValues.filter(el => el > 10);
  console.log(greaterThanTen); */

  // double array example
  const sheetValues = [
    ['North', 579], 
    ['East', 671],
    ['South', 602],
    ['West',531]
  ];
  
  /* sheetValues.forEach(function(row){
    console.log(row);
    console.log(row[1]); // 579
  }); */

  const bigValues = sheetValues.filter(function(row){
    return row[1] > 600;
  });

  console.log(bigValues);
  console.log(sheetValues);

}

















