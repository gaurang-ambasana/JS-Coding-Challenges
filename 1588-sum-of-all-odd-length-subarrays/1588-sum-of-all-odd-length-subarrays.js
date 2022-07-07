/**
 * @param {number[]} arr
 * @return {number}
 */
const sumOddLengthSubarrays = arr => arr.reduce((s, e, i) => s + Math.ceil((i + 1) * (arr.length - i) / 2) * e, 0);