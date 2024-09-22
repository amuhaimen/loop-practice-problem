// run break with numbers of array

var numbers = [20, 23, 28, 33, 35, 39, 42, 44, 48, 56, 100, 27, 9, 10, 67, 200];

for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (number > 50) {
    break;
  }
  console.log(number);
}
// result:20, 23, 28, 33, 35, 39, 42, 44, 48;

// run break with strings of array;

var footballers = ["Ronaldo", "Kaka", "Messi", "Jamal", "Martinaze", "Pele"];

for (var i = 0; i < footballers.length; i++) {
  var footballer = footballers[i];
  if (footballer == "Jamal") {
    break;
  }
  //   console.log(footballer);
}

//result: Ronaldo, Kaka, Messi;

// run continue with numbers of array;

for (var i = 0; i < numbers.length; i++) {
  var number2 = numbers[i];
  if (number2 < 50) {
    continue;
  }
  console.log(number2);
}

// result: 56, 100, 67, 200;

// run continue with strings of array

var players = [
  "Shakib",
  "Tamim",
  "Mushfiq",
  "Mahmudullah",
  "Mashrafee",
  "Miraz",
  "Tanzim",
  "Rubel",
  "Taskin",
];

for (var i = 0; i < players.length; i++) {
  var player = players[i];
  if (player.length > 6) {
    continue;
  }
  console.log(player);
}

// result: Shakib, Tamim, Miraz, Tanzim, Rubel, Taskin
