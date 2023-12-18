/**
 * What is the difference between single, double, and triple equals?
 * =
 * ==
 * ===
 * 
 */
function equalityTesting() {
  
  const someVariable = 10;
  console.log(someVariable);

  console.log(10 === 10); // true
  console.log(10 == 10); // true

  console.log(10 === "10"); // false
  console.log(10 == "10"); // true

  if (someVariable === 1) {
    console.log('The answer is 1!');
  }

  console.warn('Not equal');
  /*
  !== not equals
  !=  not equals
  */

  if ("1" !== 1) {
    console.log('The answer is NOT 1!');
  }

  console.warn('&& AND and || OR');
  let age = 16;
  if (age > 15 && age < 100) {
    console.log('Driving age');
  }

  const myFavoriteColor = 'Green';

  if ((myFavoriteColor === 'Green' || myFavoriteColor === 'Red') && age > 15) {
    console.log('Our favorite colors match!!');
  }

}
