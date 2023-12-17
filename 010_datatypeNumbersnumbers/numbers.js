function numbersTesting() {
  
  console.log(typeof 10);
  console.log(Number.isInteger(10));
  console.log(Number.isInteger(10.99));
  console.log(10.992352); // floating point numbers 
  console.log(typeof 10.992352); // floating point numbers 

  console.warn("Arithmetic");
  const firstNumber = 500;
  const secondNumber = 2;
  console.log(firstNumber + secondNumber);
  console.log(firstNumber - secondNumber);
  console.log(firstNumber * secondNumber);
  console.log(firstNumber / secondNumber);

  console.warn("Pitfalls with the +");
  console.log("Ben" + " Collins");
  console.log("10" + 10); // 1010
  console.log(typeof("10" + 10)); // 	string
  
  console.log("10" * 10); // 100
  console.log("10" - 10); // 0
  console.log("10" / 10); // 1

  console.warn("Converting between strings and numbers");
  const stringNumber = "100";
  console.log(typeof stringNumber);
  
  const convertedToNumber = parseInt(stringNumber);
  console.log(convertedToNumber);
  console.log(typeof convertedToNumber);
  console.log(parseFloat("99.99"));
  console.log(typeof parseFloat("99.99"));
  console.log(parseInt("99.99"));

  const someNumber = 1000;
  console.log(someNumber.toString());
  console.log(typeof someNumber.toString());

  console.warn("Math");
  console.log(Math.random());
  const a = 198;
  const b = 135;
  console.log(Math.max(a,b));
  console.log(Math.min(a,b));
  console.log(Math.floor(17.25));
  console.log(Math.ceil(17.25));
  console.log(Math.round(19.49999));
  console.log(87.87239868.toFixed(5));

  console.warn("Modulo");
  const pizzaSlices = 12;
  const friends = 5;
  const slicesPerFriend = Math.floor(pizzaSlices / friends);
  const slicesLeftoverForMe = pizzaSlices % friends;

  console.log(slicesPerFriend);
  console.log(slicesLeftoverForMe);

  console.warn("Floating Point Math Issue and Infinity");
  const numberOne = 0.1;
  const numberTwo = 0.2;
  const total = numberOne + numberTwo;
  console.log(total); // 0.30000000000000004

  const newTotal = (numberOne*100 + numberTwo*100) / 100;
  console.log(newTotal);

  console.log(100 / 0);
  console.log(typeof (100 / 0));
  console.log(100 / "Text"); // NaN

}
















