/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
const countPrefixes = (words, s) => words.filter((word) => s.startsWith(word)).length;