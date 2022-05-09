/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    return matrix.findIndex(row => row.includes(target)) > -1;
};