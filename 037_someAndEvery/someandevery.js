function loopTesting5() {
  
  // create arrays
  const regions = ['North', 'East', 'South', 'West'];
  const someValues = [1, 3, 5, 18, 9, 3, 12];

  // some loop
  // operation on each element
  // returns true if some value is truthy
  const greaterThanTen = someValues.some(el => el > 10);
  //console.log(greaterThanTen); // true

  const greaterThanHundred = someValues.some(el => el > 100);
  //console.log(greaterThanHundred); // false

  //const containsEast = regions.some(el => el === 'East');
  const containsEast = regions.indexOf('South East') > 0;
  //console.log(containsEast);

  // every loop
  console.log(someValues.every(n => n > 0));
  console.log(someValues.every(n => n > 1));

}
