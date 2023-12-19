function arrayTesting() {
  
  // array literal
  const benArray = [1,2,3,4];

  /* console.log(benArray);
  console.log(typeof benArray); // object
  console.log([] instanceof Array); // true
  console.log([] instanceof Object); // true 
  console.log({} instanceof Array); // false */
  //console.log(Array.isArray(benArray)); // true
  
  // two different arrays are not equal to each other
  console.log([1,2] === [1,2]); // false

  // arrays are passed by reference
  const myNewArray = benArray;
  console.log(myNewArray === benArray); // true

  myNewArray.reverse();
  console.log(myNewArray);
  console.log(benArray);

}

