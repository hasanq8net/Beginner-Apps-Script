function arrayTesting7() {
  
  const regions = [
    ['North',50],
    ['East',40],
    ['South',90],
    ['West',70]
  ];

  console.log(regions);
  console.log(regions[1]);

  const eastValue = regions[1][1];
  console.log(eastValue);

  // flatten array
  // flat method does not change the original
  // creates a new array
  const flatArray = regions.flat();
  console.log(flatArray);
  console.log(regions);

}
