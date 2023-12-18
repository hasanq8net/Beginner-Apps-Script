function logicTesting1() {
  
  const x = 18;

  if (x > 100) {
    console.log('x greater than 100!');
  }
  else if (x > 10) {
    console.log('x greater than 10!');
  }
  else if (x === 10) {
    console.log('x equals 10!');
  }
  else {
    console.log('All the other tests failed!!');
  }

}

function logicTesting2() {

  let someVariable = 'test';

  console.log(typeof someVariable);
  console.log(typeof someVariable === 'undefined');

  if (typeof someVariable === 'undefined') {
    console.log('The variable was undefined. Uh oh!');
  }
  else {
    console.log('The variable was defined already!');
  }

  console.log('Does this get logged?'); // yes

}

/**
 * Bond greeting
 */
function greeting(firstName, lastName) {

  if (firstName === 'James' && lastName === 'Bond') {
    return `The name's ${lastName}, ${firstName} ${lastName}. Martini, shaken, not stirred.`;
  }
  else {
    return `Hi, my name is ${firstName} ${lastName}.`;
  }

  // unreachable
  //console.log('Does this run?');

}

function logicTesting3() {

  const firstName = 'James';
  const lastName = 'Pond';

  // call the greeting function
  const firstGreeting = greeting(firstName,lastName);
  console.log(firstGreeting);

}


























