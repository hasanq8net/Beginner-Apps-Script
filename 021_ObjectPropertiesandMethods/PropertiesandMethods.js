function objectTesting2() {
  
  // create an object {}
  const bike = {
    id: 'xyz123',
    name: 'Gravel Max',
    color: 'Red',
    price: 799,
    'trade name': 'Gravel Max S/M/L/XL', 
    getBikeDetails() {
      return `Bike: ${this.name} | Color: ${this.color} | Price: $${this.price}`;
    }
  }

  console.log(bike.id);
  console.log(bike['id']);
  console.log(bike['trade name']);

  console.log(bike.getBikeDetails());
  
  /* function getBikeDetails(bike) {
    return `Bike: ${bike.name} | Color: ${bike.color} | Price: $${bike.price}`;
  }

  console.log(myBike); */
  
}

