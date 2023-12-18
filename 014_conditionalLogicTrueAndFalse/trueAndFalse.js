function truthyFalsyTesting() {

  console.warn('Truthy values');
  console.log(Boolean(true));
  console.log(Boolean(1000));
  console.log(Boolean(-1000));
  console.log(Boolean(Math.PI));
  console.log(Boolean('A string'));
  console.log(Boolean([1,2,3]));
  console.log(Boolean([]));
  console.log(Boolean({
    id: 'Ben123'
  }));
  console.log(Boolean(10 === 10));
  console.log(Boolean(new Date()));

  console.warn('Falsy values');
  console.log(Boolean(false));
  console.log(Boolean(0)); // falsy value
  console.log(Boolean(''));
  console.log(Boolean(null));
  console.log(Boolean(undefined));
  console.log(Boolean(NaN));

  let someVariable;
  console.log(Boolean(someVariable));
  
  if (someVariable) {
    console.log('Do something!')
  }
  
}
