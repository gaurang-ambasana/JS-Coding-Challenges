/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = (n, start) => Array(n).fill().reduce((res, _, i) => res ^ (start + 2 * i), 0);