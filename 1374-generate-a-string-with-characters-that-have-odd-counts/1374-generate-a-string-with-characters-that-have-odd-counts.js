/**
 * @param {number} n
 * @return {string}
 */
const generateTheString = (n) => `a`.repeat(n - 1) + (n % 2 ? `a` : `b`);