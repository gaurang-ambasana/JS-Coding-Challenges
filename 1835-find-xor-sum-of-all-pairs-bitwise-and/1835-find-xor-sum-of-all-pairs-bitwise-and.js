/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */

// Since (X & A) ^ (X & B) = X & (A ^ B) 

var getXORSum = (arr1, arr2) => arr1.reduce((a, b) => a ^ b) & arr2.reduce((a, b) => a ^ b);