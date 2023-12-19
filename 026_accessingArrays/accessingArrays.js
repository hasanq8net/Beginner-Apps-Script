function arrayTesting2() {
  
  // create an array
  const letters = ['a','b','c','d'];

  // indexOf
  /* console.log(letters.indexOf('a'));
  console.log(letters.indexOf('b'));
  console.log(letters.indexOf('c'));
  console.log(letters.indexOf('d'));
  console.log(letters.indexOf('e') === -1); // -1 if element is not in the array */

  // includes
  /* console.log(letters.includes('a')); // true
  console.log(letters.includes('g')); // false */

  // accessing items
  // arrays start with index = 0
  console.log(letters[0]);
  console.log(letters[1]);

  // last item
  /* console.log(letters.length - 1);
  console.log(letters[letters.length - 1]); */

  // update an item
  /* letters[0] = 'A';
  console.log(letters);

  // empty an array
  letters.length = 0;
  console.log(letters); */

  // more complex array of objects
  const colors = [
    {id: 1, name: 'Green'},
    {id: 2, name: 'Blue'},
    {id: 3, name: 'Red'}
  ];
  //console.log(colors[1]);
  
  /* const myIndex = colors.findIndex(function(el) {
    return el.name === 'green';
  }); */
  const myIndex = colors.findIndex(el => el.name === 'Green');
  console.log(myIndex); // -1 if not found

}


















