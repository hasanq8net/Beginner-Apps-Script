function objectTesting4() {
  
  const bike = {
    id: 'xyz123',
    name: 'Gravel Max',
    color: 'Red',
    price: 799
  }
  console.log(bike);

  // adding properties
  bike.stock = 15;
  console.log(bike);

  // updating properties
  bike.price = 899;
  bike.stock = 7;
  console.log(bike);
  console.log(bike.color);

  // deleting properties
  delete bike.color;
  console.log(bike);
  console.log(bike.color);

}
