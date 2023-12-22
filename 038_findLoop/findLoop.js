function loopTesting6() {
  
  const someValues = [1, 3, 18, 5, 9, 3, 12];

  /* const foundItem = someValues.find(function(el) {
    return el > 3;
  }); */
  const foundItem = someValues.find(el => el > 3);
  console.log(foundItem);

  const sheetValues = [
    ['North', 579], 
    ['East', 671],
    ['South', 602],
    ['West',531]
  ];

  const foundRow = sheetValues.find(row => {
    return row[0].startsWith('E');
  });
  console.log(foundRow);

}


