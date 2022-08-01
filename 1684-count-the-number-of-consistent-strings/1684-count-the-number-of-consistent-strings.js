/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
const countConsistentStrings = (allowed, words) => words.reduce((c, w) => new RegExp(`^[${allowed}]+$`).test(w) ? ++c : c, 0);