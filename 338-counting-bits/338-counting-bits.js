/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = n => [...Array(n + 1).keys()].map((b) => b.toString(2).split('').reduce((count, num) => num === '1' ? ++count : count, 0));
