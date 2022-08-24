/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = n => n === 1 ? true : n % 3 === 0 && n !== 0 ? isPowerOfThree(n/3) : false;