/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var getXORSum = function(arr1, arr2) {
    return arr1.reduce((r, e) => r ^ e) & arr2.reduce((r, e) => r ^ e);
};