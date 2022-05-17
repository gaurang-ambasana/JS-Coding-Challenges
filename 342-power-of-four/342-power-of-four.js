/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = n => n === 1 ? true : n % 4 === 0 && n !== 0 ? isPowerOfFour(n/4) : false;