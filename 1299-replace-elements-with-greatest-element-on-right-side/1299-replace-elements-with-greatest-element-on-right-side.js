/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = arr => arr.slice(0, arr.length - 1).map((_, i) => Math.max(...arr.slice(i + 1))).concat([-1]);