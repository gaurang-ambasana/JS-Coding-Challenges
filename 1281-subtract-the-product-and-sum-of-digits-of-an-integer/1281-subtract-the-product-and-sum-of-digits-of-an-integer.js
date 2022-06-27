/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = (n) => n.toString().split(``).reduce((p, e) => p * e, 1) - n.toString().split(``).map(Number).reduce((s, e) => s + e, 0);