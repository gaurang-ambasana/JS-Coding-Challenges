/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = (arr) => arr.sort((a, b) => {
    const d = a.toString(2).split(``).reduce((c, a) => a === '1' ? ++c : c, 0) - b.toString(2).split(``).reduce((c, a) => a === '1' ? ++c : c, 0);
    return d ? d : a - b;
});