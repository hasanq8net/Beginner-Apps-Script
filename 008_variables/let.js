function variableTesting2() {
  
  // let declaration
  let someVariable = 10;
  console.log(someVariable);

  // reassignment
  someVariable = 'Ben Collins';
  console.log(someVariable);

  // var = function scoped
  // let = block scoped
  
  {
    let innerVariable = 'I am a let!';
    //console.log(innerVariable);

    var innerVariable2 = 'I am a var!';
    //console.log(innerVariable2);
  }


  //console.log(innerVariable); //innerVariable is not defined
  console.log(innerVariable2);

  console.log(newLetVariable); // Cannot access 'newLetVariable' before initialization

  let newLetVariable = 10;

}
