function stringTesting() {
  
  const firstName = 'James';
  const lastName = "Smith";
  const title = `Mr`;
  console.log(firstName);
  console.log(lastName);
  console.log(title);

  console.log(firstName + ' ' + lastName);

  const sentence = '"That\'s Suzie\'s toy" said Michelle.';
  console.log(sentence);

  const sentence2 = `"That's Suzie's toy!" said Michelle.`;
  console.log(sentence2);

  const concatenatedGreeting = 'The name\'s ' + lastName + ', ' + firstName + ' ' + lastName;
  console.log(concatenatedGreeting);

  const greeting = `The name's ${lastName}, 
  ${firstName} 
  ${lastName}.`;
  console.log(greeting);

}
