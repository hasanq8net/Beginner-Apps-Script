function arrowFunctionTesting() {
  
  /* function doubleNumber(value) {
    return value * 2;
  } */

  const doubleNumber = value => value * 2;
  console.log(doubleNumber(10));

  const exampleTwo = () => 'Some value!';
  console.log(exampleTwo());


  const exampleThree = (a, b) => a + b;
  console.log(exampleThree(5,25));

  const array = [1,2,3,4,5,6,7,8];
  /* const newArray = array.filter(function(value) {
    return value > 4;
  }); */
  const newArray = array.filter(v => v > 4);
  console.log(newArray);

}
