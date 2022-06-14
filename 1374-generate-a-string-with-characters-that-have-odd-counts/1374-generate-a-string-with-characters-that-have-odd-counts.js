/**
 * @param {number} n
 * @return {string}
 */
const generateTheString = n => n % 2 ? `a`.repeat(n) : `${'a'.repeat(n - 1)}b`;