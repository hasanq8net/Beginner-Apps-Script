function loopTesting1() {
  
  const regions = ['North', 'East', 'South', 'West'];
  //console.log(regions);

  /* regions.forEach(function(region, i) {
    // function logic
    console.log(region);
    console.log(i); // 0 based
  }); */

  //regions.forEach(region => console.log(region));

  // data array
  const someValues = [1, 3, 5, 18, 9, 3, 12];
  console.log(someValues);

  const squareNumberArray = [];

  someValues.forEach(function(el) {
    const squareNumber = Math.pow(el,2);
    console.log(`Number: ${el} | Square number: ${squareNumber}`);
    squareNumberArray.push(squareNumber);
  });

  console.log(squareNumberArray);

}

