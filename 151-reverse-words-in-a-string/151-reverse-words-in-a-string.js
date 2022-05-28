/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = s => s.trim().split(` `).filter(c => c.trim().length > 0).reverse().join(` `);