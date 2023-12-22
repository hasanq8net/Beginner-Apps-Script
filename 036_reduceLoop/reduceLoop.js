function loopTesting4() {
  
  const someValues = [1, 3, 5, 18, 9, 3, 12];

  /* const total = someValues.reduce(function(accumulator,current,i) {
    console.log('Index: ' + i);
    console.log('Current: ' + current);
    console.log('Accumulator: ' + accumulator);
    return accumulator + current;
  },0); */
  const total = someValues.reduce((a,c) => a+c,0);
  //console.log(total);

  // double array example
  const sheetValues = [
    ['North', 579], 
    ['East', 671],
    ['South', 602],
    ['West',531]
  ];
  console.log(sheetValues);

  const regionResult = sheetValues.reduce(function(a,c) {
    /* console.log(c);
    console.log(c[0]);
    console.log(a); */
    return a + `${c[0]} revenue: $${c[1]}m |`
  },'');
  console.log(regionResult);

}












