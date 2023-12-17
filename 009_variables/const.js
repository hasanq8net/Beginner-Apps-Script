function variableTesting3() {

  // const
  const name = 'Ben';
  console.log(name);

  // reassignment not possible with const
  //name = 'Ben Collins'; 
  //console.log(name);

  // const doesn't mean the variable has to have a constant value
  const array = [1,2,3];
  console.log(array);

  array.push(4);
  console.log(array);

  // block scoped like let
  {
    const innerVariable = 'I am a const!';
    var anotherInnerVariable = 'I am a var!';
    console.log(innerVariable);
    console.log(anotherInnerVariable);
  }

  // hoisting is same as let
  const aNewConstVariable = 1000;
  console.log(aNewConstVariable); // Cannot access 'aNewConstVariable' before initialization

}
