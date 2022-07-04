/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = (n, start) => Array(n).fill().reduce((res, _, i) => (start + 2 * i) ^ res, 0);