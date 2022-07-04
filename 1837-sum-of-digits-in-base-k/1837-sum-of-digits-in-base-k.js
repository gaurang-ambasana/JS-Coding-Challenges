/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = (n, k) => n.toString(k).split(``).reduce((res, digit) => Number(res) + Number(digit), 0);