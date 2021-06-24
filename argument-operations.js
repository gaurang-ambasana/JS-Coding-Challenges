// In this code we will be understanding the spread operator which is most important thing,
// If you are working with mordern JavaScript

// We will implement some basic operations to get better understanding

// A function which will multiply all of it's arguments

const multiply = (...args) => {
  // simply taking arguments as an Array using spread/rest operator
  const result = args.reduce((acc, ele) => {
    // reduce is JavaScript Array method to perform accumulating operation on Array
    return ele * acc;
  }, 1); // second argument to reduce method is accumulator / intial value which will be used in iteration
  // always provide intial value to avoid TypeError

  return result;
};

console.log(multiply(5, 6)); // -> 30
// 5 * 6 = 30

console.log(multiply(56, 8, 85)); //  -> 38080
// 56 * 8 * 85 = 38080

console.log(multiply(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2)); // -> 2
// multiple 1(s) * 2 = 2

// As you can see it works out irrespective of number of arguments passed, all thanks to spread operator

// Let's take another example of Addition Function using methodology

const add = (...args) => {
  const result = args.reduce((acc, ele) => {
    // using same reduce JavaScript Array method
    return acc + ele; // simplt adding interated value and array element
  }, 0); // here intial value will be 0, because we're adding all the arguments

  return result;
};

console.log(add(6, 5, 5, 5, 5, 5, 5)); // -> 36
console.log(add(4, 5, 8)); // -> 17

// Works like a charm here as well

console.log(add("Hello ", "World", 52)); // Will cause a problem right?
console.log(multiply("Hello", "Hey!", 162)); // This will also cause a problem, correct?

// Always use TypeScript to avoid data type related Errors :)
