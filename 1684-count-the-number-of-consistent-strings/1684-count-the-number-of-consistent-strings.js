/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = (allowed, words) => words.map(w => Array.from(new Set(w)).filter(c => !allowed.includes(c)).join(``)).filter(w => !w).length;