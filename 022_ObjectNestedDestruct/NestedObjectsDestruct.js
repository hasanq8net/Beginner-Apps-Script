function objectTesting3() {
 
  const bike = {
    id: 'xyz123',
    name: 'Gravel Max',
    color: 'Red',
    price: 799,
    size: {
      small: '52 cm',
      medium: '54 cm',
      large: '56 cm'
    }
  }


  // destructuring
  // ...rest
  const {id, name,...rest} = bike;
  console.log(id);
  console.log(name);
  console.log(rest);


  // destructuring nested objects
  const {small, medium, large} = bike.size;
  console.log(medium);


  console.log(bike.size.medium);


  /* const name = bike.name;
  const price = bike.price;
  console.log(name); */


  /* console.log(bike.name);
  console.log(bike['name']);


  console.log(bike.size);
  console.log(bike.size.small);
  console.log(bike.size.large);
  console.log(bike['size']['large']); */


  // object methods
  const values = Object.values(bike);
  const keys = Object.keys(bike);


  /* console.log(values);
  console.log(keys);


  console.log(Object.keys(bike).includes('price'));
  console.log(Object.values(bike).includes('Gravel Max')); */


}
