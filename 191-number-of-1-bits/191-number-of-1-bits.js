/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = (n) => n.toString(2).split('').reduce((count, num) => num === '1' ? ++count : count, 0);