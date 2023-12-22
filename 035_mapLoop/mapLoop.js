function loopTesting3() {
  
  // example 1
  const someValues = [1, 3, 5, 18, 9, 3, 12];
  console.log(someValues);
  console.log(someValues.length);

  const newValues = someValues.map(el => el * 10);
  console.log(newValues);
  console.log(newValues.length);

  // example 2
  const regions = ['North', 'East', 'South', 'West'];
  console.log(regions);

  const usRegions = regions.map(function(region) {
    return region + ' US';
  });
  console.log(usRegions);
  console.log(regions); 

  // double array example
  const sheetValues = [
    ['North', 579], 
    ['East', 671],
    ['South', 602],
    ['West',531]
  ];
  console.log(sheetValues);

  const updatedValues = sheetValues.map(function(row){
    return [row[0] + ' US', '$' + row[1] + 'm'];
  });

  console.log(updatedValues);
  console.log(sheetValues);

}

