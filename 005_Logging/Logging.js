function logOne() {

  console.log('My first log!');
  Logger.log('Another way to log');

  console.warn('Start of loop');
  const numbers = [1,2,3,4,5,6,7,8,9,10];
  numbers.forEach((number,i) => console.log('Number: ' + number + ' | iteration: ' + i));

}

function logTwo() {

  console.error('Error');
  console.info('Info');
  console.log('Log');
  console.warn('Warn');

  // start our timer
  console.time('logOne Timer');

  // do something, in this case, we call function logOne
  logOne();

  // stop the timer
  console.timeEnd('logOne Timer');

}
