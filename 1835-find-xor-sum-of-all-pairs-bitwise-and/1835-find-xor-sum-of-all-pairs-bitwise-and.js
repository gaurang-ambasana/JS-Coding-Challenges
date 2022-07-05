/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */

// Since (X & A) ^ (X & B) = X & (A ^ B) 

const getXORSum = (arr1, arr2) => {
    return arr1.reduce((a, b) => a ^ b) & arr2.reduce((a, b) => a ^ b);
}