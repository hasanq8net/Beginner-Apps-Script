function functionTesting1() {
  
  // built-in functions
  /* console.log(10);
  console.log(Math.round(24.089874)); */

  // function definition
  function firstFunction() {
    console.log('I was called! Or executed! Or run! Or invoked!');
    return 99;
  }

  // calling the function
  const answer = firstFunction();
  console.log(answer);

  console.log(`The answer is ${firstFunction()}`);

}
