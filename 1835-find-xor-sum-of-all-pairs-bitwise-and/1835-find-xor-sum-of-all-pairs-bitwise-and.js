/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
const getXORSum = (arr1, arr2) => arr2.reduce((r, e) => r ^ e) & arr1.reduce((r, e) => r ^ e);