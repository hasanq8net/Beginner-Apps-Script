function variableTesting1() {
  
  // declare a variable
  var someVariable;
  //console.log(someVariable); // undefined
  
  // initialize it
  someVariable = 20;
  //console.log(someVariable);

  // all in one line
  var someOtherVariable = 50;
  //console.log(someOtherVariable);

  // hoisting
  var newVariable = 100;
  console.log(newVariable); // undefined
  
}

function testVar() {
  console.log(someVariable); // someVariable is not defined
}





