// function howManyHundreds(number){
//   return((number / 100)) - ((number % 100) / 100)
// }

// console.log(howManyHundreds(1000));

function howManyHundreds(number){
  let division = number / 100;
  return Math.floor(division);
}

console.log(howManyHundreds(1000));