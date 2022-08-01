/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = (allowed, words) => words.filter(w => new RegExp(`^[${allowed}]+$`).test(w)).length;