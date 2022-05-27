/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = n => n.toString(2).split('').reduce((counter, d) => (counter[d] = (counter[d] ?? 0) + 1, counter), {})['1'] ?? 0;