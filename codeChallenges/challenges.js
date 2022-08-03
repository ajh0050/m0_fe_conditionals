// Using the following variables:
//
// ```ruby
// goodDrivingRecord = true
// isOver25 = true
// ```
//
// Write a program that evaluates the status of the variables above, and uses logic to print one of three possible messages:
// - If the driving record is good and user is over 25 years old, they should get a discount on the car rental
// - If the user either has a good record or is over 25 years old, they should pay full price
// - If the user is not over 25 and has a bad driving record, they need to have someone else sign for the rental

goodDrivingRecord = true
isOver25 = true

if (goodDrivingRecord  && isOver25) {
  console.log("they should get a discount on the car rental")
} else if (goodDrivingRecord || isOver25) {
  console.log("they should pay full price")
} else if (!goodDrivingRecord && !isOver25) {
  console.log("they need to have someone else sign for the rental")
}


// Write a JavaScript program that defines a variable that stores an Number. The program should print out the String "even" if the Number is even, and the String "odd" if the Number is odd.
var numberHere = 33

numberHere % 0 ? console.log("is even") : console.log("is odd")
