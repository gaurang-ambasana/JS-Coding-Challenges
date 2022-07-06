/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = arr => arr.sort((a, b) => (a.toString(2).split(``).reduce((c, n) => parseInt(n) ? ++c : c, 0) - b.toString(2).split(``).reduce((c, n) => parseInt(n) ? ++c : c, 0)) || a - b);