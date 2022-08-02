/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = (matrix, k) => matrix.flat().sort((a, b) => a - b)[--k];