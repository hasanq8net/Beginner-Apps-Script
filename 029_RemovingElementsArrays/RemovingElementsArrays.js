function arrayTesting5() {
  
  // create array
  const sports = ['football','tennis','cycling','running'];
  console.log(sports);

  // shift - removes first element
  // mutates the original array i.e. modifies the original array
  const firstSport = sports.shift();
  console.log(sports);
  console.log(firstSport); 

  // pop - removes last element
  // mutable, changes original
  const lastSport = sports.pop();
  console.log(sports);
  console.log(lastSport); 

  // splice to remove element
   const removedSport = sports.splice(1,2);
  console.log(sports);
  console.log(removedSport); 
  
  // immutable method, does not change original
  const newSports = [
    ...sports.slice(0,1),
    ...sports.slice(2,sports.length)
  ];
  console.log(newSports);
  console.log(sports);
   console.log(...sports.slice(0,1));
  console.log(...sports.slice(2,4));

}
