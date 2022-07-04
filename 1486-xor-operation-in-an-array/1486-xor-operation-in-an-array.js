/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = (n, start) => Array(n).fill(0).reduce((res, x, i) => res ^ (start + 2 * i), 0);