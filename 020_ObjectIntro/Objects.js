function objectTesting1() {
  
  // create an object with object literals
  const obj = {};
  //const obj = new Object();
  /* console.log(obj);
  console.log(typeof obj);
  console.log(obj instanceof Object); */

  const bike = {
    id: 'xyz123',
    price: 799,
    name: 'Gravel Max',
    color: 'Red'
  };

  /* console.log(typeof bike);
  console.log(bike);
  
  console.log(bike.name);
  console.log(bike['price']); */

  // object reference
  const secondBike = bike;
  console.log(secondBike);
  secondBike.color = 'Blue';
  console.log(secondBike);
  console.log(bike);
  console.log(bike === secondBike); // same object in question

  // no two different objects are equal
  console.log({} === {}); // false

}

















