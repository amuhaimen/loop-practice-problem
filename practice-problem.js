// practice 1.
// print "ajk amar mon valo nai" in 39 times
for (var i = 1; i <= 39; i++) {
  //   console.log(i, "ajk amar mon valo nai");
}

// practice 2.

for (i = 58; i <= 98; i++) {
  // console.log(i);
}

// practice 3. print 412 to 456 all even numbers.

for (i = 412; i <= 456; i += 2) {
  // console.log(i);
}

// practice 4. print 581 to 623 all odd numbers

for (i = 581; i <= 623; i += 2) {
  console.log(i);
}

// practice 5.loop this array to get my skills in single

var haveLearned = ["HTML", "CSS", "TAILWIND", "JAVASCRIPT"];

for (i = 0; i < haveLearned.length; i++) {
  var topic = haveLearned[i];
  // console.log(topic);
}

// practice 6.

var smartPhons = ["Redmi", "Vivo", "Oppo", "Samsung", "I phone"];

var i = 0;
while (i < smartPhons.length) {
  var phone = smartPhons[i];
  console.log(phone);
  i++;
}

// practice 6.

for (var i = 30; i <= 86; i++) {
  if (i >= 44) {
    break;
  }
  //   console.log(i);
}

// practice 7.

var bookPrices = [50, 60, 120, 349, 500, 400, 105, 99, 46, 58, 59, 190, 250];

for (var i = 0; i < bookPrices.length; i++) {
  var price = bookPrices[i];
  if (price > 200) {
    continue;
  }
  // console.log(price);
}
