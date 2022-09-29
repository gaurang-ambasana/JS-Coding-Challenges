/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = (arr, k, x) => arr.map(n => [n, Math.abs(n - x)]).sort(([,d1],[,d2]) => d1 - d2).slice(0, k).map(([n]) => n).sort((a, b) => a - b);