/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = (arr) => {
    const get1s = (n) => n.toString(2).split(``).reduce((c, a) => a === '1' ? ++c : c, 0);
    return arr.sort((a, b) => get1s(a) - get1s(b) ? get1s(a) - get1s(b) : a - b );
};