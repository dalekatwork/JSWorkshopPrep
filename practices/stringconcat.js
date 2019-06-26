/*  This is a simple exercise to learn about string concatenation:
 Give the students instructions like: build a function called iceCreamMachine
 that allows you to pass in different tastes of your favourite ice cream and
 allows you to mix the ice creams together.
 Hint: Joining different strings into one. */


//Possible solution that we try to get to together:
function iceCreamMachine (tastes) {
	let finalString = "I like to have ";
	tastes.forEach(function (taste){
  	finalString += taste + " ";
  });
  console.log(finalString);
}

iceCreamMachine(["chocolate", "joghurt", "pistachio"]);

// Returns: "I like to have chocolate joghurt pistachio"



// Additonal options:
// 1. Make sure each ice cream is separated by a comma.
// 2. Add an "and" before the last taste.
// 3. Finish the sentence with a ".".
// Returning: "I like to have chocolate, joghurt and pistachio."