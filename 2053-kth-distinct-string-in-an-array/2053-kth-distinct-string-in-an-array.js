/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = (arr, k) => arr.filter((c) => arr.indexOf(c) === arr.lastIndexOf(c))[k - 1] ?? '';