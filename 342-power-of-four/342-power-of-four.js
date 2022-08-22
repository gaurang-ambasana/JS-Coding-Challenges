/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    return n === 1 ? true : n % 4 === 0 && n !== 0 ? isPowerOfFour(n/4) : false;
};