/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var getXORSum = (arr1, arr2) => arr1.reduce((r, e) => r ^ e) & arr2.reduce((r, e) => r ^ e);