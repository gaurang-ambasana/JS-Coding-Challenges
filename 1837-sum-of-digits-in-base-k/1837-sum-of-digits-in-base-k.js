/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const sumBase = (n, k) => n.toString(k).split('').reduce((res, digit) => Number(res) + Number(digit), 0);