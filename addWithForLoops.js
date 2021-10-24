// Static Array
const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100,
];

let sum = 0; // intialising sum

console.time("normal for loop");
// traditional C like for loop
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.timeEnd("normal for loop"); // takes 0.112ms

console.log(`Sum : ${sum}`);
sum = 0; // reset sum

console.time("for... in loop");
// ES6 Style
for (const i in arr) {
  sum += arr[i];
}
console.timeEnd("for... in loop"); // takes 0.271ms

console.log(`Sum : ${sum}`);
sum = 0; // reset sum

console.time("for... of loop");
// Newer ES version
for (const i of arr) {
  sum += i;
}
console.timeEnd("for... of loop"); // takes 0.029ms -> fastest

console.log(`Sum : ${sum}`);

// For .. of loop is faster however it can vary on NodeJS and Browser in spite of utilizing Chrome's V8
