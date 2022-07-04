/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = (n, k) => n.toString(k).split(``).reduce((res, digit) => parseInt(res) + parseInt(digit), 0);