function arrayTesting8() {
  
  // first array
  const sports = ['football','tennis','cycling'];
  console.log(sports);

  // second array
  const moreSports = ['running','climbing'];
  console.log(moreSports);

  // merge arrays
  const allSports = [sports, moreSports].flat();
  console.log(allSports);

  // method 2
  const allSports2 = [...sports, ...moreSports];
  console.log(allSports2);

  // method 3
  const allSports3 = sports.concat(moreSports);
  console.log(allSports3);

  console.log(sports);
}

