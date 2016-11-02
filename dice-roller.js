function actuallyNumber(value) {
  return !isNaN(value);
}

function diceRoll(num) {
  //var dice = Math.floor( (Math.random() * 6) + 1);
  var rolls = [];

  if (actuallyNumber(num)) {
    for (var i = 0; i < num; i++){
      rolls.push(Math.floor((Math.random() * 6) + 1));
    }
    return "Rolled " + num + " dice(s): " + rolls.join(", ");
  } else {
    return "Please put in a number!";
  }
}

console.log(diceRoll('1'));