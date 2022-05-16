/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    return arr.filter(c => arr.indexOf(c) === arr.lastIndexOf(c))[k - 1] ?? '';
};