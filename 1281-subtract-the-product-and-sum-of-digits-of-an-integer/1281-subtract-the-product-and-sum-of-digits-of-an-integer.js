/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = n => n.toString().split(``).reduce((p, e) => p * e, 1) - n.toString().split(``).reduce((s, e) => parseInt(s) + parseInt(e), 0);