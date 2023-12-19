function arrayTesting4() {
  
  const sports = ['football','tennis','cycling'];
  console.log(sports);

  // unshift - mutable
  // adds to beginning of the array
  console.warn('Unshift');
  sports.unshift('climbing');
  console.log(sports);

  // push - mutable
  // adds to the end of the array
  console.warn('Push');
  sports.push('basketball');
  console.log(sports);

  // slice() - creates a new array, leaves orginal unchanged
  // immutable
  // slice(start)
  // slice(start,end) - up to but does not include item at the end index
  console.warn('Slice');
  console.log(sports.slice());
  console.log(sports.slice(2));
  const favoriteSportsArray = sports.slice(1,3);
  console.log(favoriteSportsArray);
  console.log(sports);

  // splice()
  // changes the original array
  // mututable
  // returns a new array of deleted items
  /* console.warn('Splice');
  console.log(sports);
  console.log(sports.splice(1,2,'running'));
  console.log(sports); */

  // create new array and add item to it
  console.warn('Add to NEW array (immutable)')
  console.log(sports);
  console.log(...sports);
  const newSportsArray = [...sports,'running'];
  console.log(newSportsArray);
  console.log(newSportsArray.length);
  console.log(sports);

  // [ 'climbing', 'football', 'tennis', 'cycling', 'basketball' ]

  // add new element to array middle without modifying original array
  console.warn('Add to middle (immutable)');
  console.log(sports.slice(0,2));
  console.log(sports.length);
  console.log(sports.slice(2,sports.length));
  const newSportsArray2 = [
    ...sports.slice(0,2),
    'running',
    ...sports.slice(2,sports.length)
  ];
  console.log(newSportsArray2);
  console.log(sports);

  // 5 
  // 0, 1, 2, 3, 4

}





















