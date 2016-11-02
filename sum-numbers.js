/*
Give that I have some numbers
I want to sum them all
so that I can know the result

We already know:
  - How to get arguments from the command line
  - How to sum numbers
  - How to go through all of them?

*/


function actuallyNumber(value) {
  return !isNaN(value);
}

var numbers = process.argv.slice(2);

function totalize(numbers) {
  var total = 0;
  for (var counter = 0; counter < numbers.length; counter++) {
     var number = Number(numbers[counter]);
     if (actuallyNumber(number)) {
       total += number;
     }
    // total += (currentNumber !== NaN) ? currentNumber : 0;
  }
  return total;
}

console.log(totalize(numbers));
