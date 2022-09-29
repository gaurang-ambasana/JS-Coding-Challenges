/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    return arr.map(n => [n, Math.abs(n - x)]).sort(([_, a], [x, b]) => a - b).slice(0, k).map(([n]) => n).sort((a, b) => a - b);
};