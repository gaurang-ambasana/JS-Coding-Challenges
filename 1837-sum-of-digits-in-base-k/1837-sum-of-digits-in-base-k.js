/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = (n, k) => n.toString(k).split(``).map(Number).reduce((res, digit) => res + digit, 0);