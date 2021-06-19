// Any Number which is divisible by 2 is "EVEN" Number
// Any Number which is not divisible by 2 is "ODD" Number

// % (Modulo) operator return reminder
// Directly Number % 2 == 0 -> EVEN
// Directly Number % 2 != 0 -> ODD

// function check if number is odd
const isOdd = (number) => {
  return Number(number) % 2 !== 0;
};

// function to check if number is even
const isEven = (number) => {
  return Number(number) % 2 === 0;
};

console.log(isOdd(7)); // -> True
console.log(isEven(7)); // -> False
