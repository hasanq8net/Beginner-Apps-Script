function arrayTesting6() {
  
  const sports = ['football','tennis','archery','cycling','running','volleyball'];
  console.log(sports);

  // sort method 
  // sorts alphabetically
  sports.sort();
  console.log(sports);

  // reverse method
  sports.reverse();
  console.log(sports);

  // number example
  const numArray = [11,2,22,1];
  console.log(numArray);

  numArray.sort(function(a,b) {
    return b - a;
  }); 
  numArray.sort((a, b) => a - b)
  console.log(numArray);

}

