/*
 * Any number which is divisible by 2 is "EVEN" Number
 * Any number which is not divisible by 2 is "ODD" Number.
 *
 * % (Modulo) operator return reminder of any two numbers
 * <any number> % 2 == 0 -> returns true if the number is even
 * <any number> % 2 != 0 -> returns true if the number is odd
 */

/**
 * Function to check if a given number is odd or not
 * @param {Number} num - the input number to check if it is odd
 * @returns {Boolean} - true means the number is odd and false means it isn't
 *
 * @author Gaurang Ambasana <someone@gmail.com>
 * @link https://github.com/gaurang-ambasana/JS-Coding-Challenges-and-Example/edit/master/odd-even.js
 * * @version 1.0.0 - Initial version
 * @version 1.0.1 - 20 June 2021, Jishnu Raj <jishnurajpp2@gmail.com>
 *  * Modified the documentation design
 */
const isOdd = (num) => Number(num) % 2 !== 0;

/**
 * Function to check if a given number is even or not
 * @param {Number} num - the input number to check if it is even
 * @returns {Boolean} - true means the number is even and false means it isn't
 *
 * @author Gaurang Ambasana <someone@gmail.com>
 * @link https://github.com/gaurang-ambasana/JS-Coding-Challenges-and-Example/edit/master/odd-even.js
 * * @version 1.0.0 - Initial version
 * @version 1.0.1 - 20 June 2021, Jishnu Raj <jishnurajpp2@gmail.com>
 *  * Modified the documentation design
 */
const isEven = (num) => Number(num) % 2 === 0;

console.log(isOdd(7)); // logs true to the console
console.log(isEven(7)); // logs false to the console
