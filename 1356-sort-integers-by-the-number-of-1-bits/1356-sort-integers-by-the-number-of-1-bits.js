/**
 * @param {number[]} arr
 * @return {number[]}
 */
const sortByBits = arr => arr.sort((a, b) => (a.toString(2).split(``).reduce((c, n) => parseInt(n) ? ++c : c, 0) - b.toString(2).split(``).reduce((c, n) => parseInt(n) ? ++c : c, 0)) || a - b);