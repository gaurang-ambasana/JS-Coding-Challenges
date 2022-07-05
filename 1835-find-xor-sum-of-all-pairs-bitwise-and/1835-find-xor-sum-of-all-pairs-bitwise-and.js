/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */

// Since (X & A) ^ (X & B) = X & (A ^ B)

var XOR = (a, b) => a ^ b;

var getXORSum = (arr1, arr2) => arr1.reduce(XOR) & arr2.reduce(XOR);