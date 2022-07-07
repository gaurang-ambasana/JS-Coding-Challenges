/**
 * @param {number[]} arr
 * @return {number}
 */
const sumOddLengthSubarrays = (arr) => arr.reduce((sum, e, i) => sum + Math.ceil((i + 1) * (arr.length - i) / 2) * e, 0);