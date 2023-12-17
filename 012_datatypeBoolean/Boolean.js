function booleanTesting() {
  
  console.log(true);
  console.log(false);
  // console.log(True); // True is not defined
  // console.log(TRUE); // TRUE is not defined

  console.log(typeof true); // 	boolean

  // example
  if (true) {
    console.log('This is true!');
  }

  let age = 15;
  console.log(age > 15);

  age = 16;

  if (age > 15) {
    console.log('You can start driving!!');
  }

  console.log(Boolean(100 / "Ben"));
  console.log(100 / "Ben");
  console.log(!!(100 / "Ben"));

}
