/**
 * Syntax:
 * condition ? expression if truthy : expression if falsy
 */
function ternaryTesting1() {

  /* if (10 > 5) {
    console.log('10 is indeed greater than 5');
  }
  else {
    console.log('Houston, we have a problem');
  } */

  const result = (10 > 5) ? '10 is indeed greater than 5' : 'Houston, we have a problem';
  console.log(result);

}

function isItCold(temp) {
  return (temp < 40) ? `Yes, it's cold!` : `No, it's not cold today.`;
}

function ternaryTesting2() {

  console.log(isItCold(105));

}
