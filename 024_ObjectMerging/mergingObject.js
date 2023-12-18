function objectTesting5() {
  
  const bike = {
    id: 'xyz123',
    name: 'Gravel Max',
    color: 'Red',
    price: 799
  };

  const size = {
    small: '52 cm',
    medium: '54 cm',
    large: '56 cm'
  };

  console.log(bike);
  console.log(size);

  // flat merge
  // spread operator ...
  const fullBike = {
    ...bike,
    ...size
  };
  console.log(fullBike);

  // nested merge
  const fullNestedBike = {
    ...bike,
    ...{size}
  };
  console.log(fullNestedBike);

}

