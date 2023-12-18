function functionTesting1() {

  // arguments --> values
  //const amount = totalCost(9.99, 15);
  //console.log(amount);

  // pass in variables
  const priceToday = 8.99;
  const howMany = 100;
  //console.log(totalCost(priceToday, howMany));

  // call the ternary function
  /* console.log(isGreaterThanFifty(100));
  console.log(isGreaterThanFifty(10));
  console.log(isGreaterThanFifty(100, 50)); */

  console.log(totalCost(99));

}

// parameters --> placecholders
function totalCost(price, quantity = 1) {
  console.log(quantity);
  console.log(typeof quantity);
  return price * quantity;
}

// ternary operator example
function isGreaterThanFifty(value) {
  return (value > 50) ? true : false;
}


















