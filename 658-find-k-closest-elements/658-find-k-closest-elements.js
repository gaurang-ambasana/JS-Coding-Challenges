/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = (arr, k, x) => arr.map(n => [n, Math.abs(n - x)]).sort(([,val1],[,val2]) => val1 - val2).slice(0, k).map(([key]) => key).sort((a, b) => a - b);