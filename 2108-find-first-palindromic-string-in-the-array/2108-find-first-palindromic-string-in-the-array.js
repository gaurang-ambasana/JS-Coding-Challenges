/**
 * @param {string[]} words
 * @return {string}
 */
const firstPalindrome = (words) => words.find(word => word === word.split('').reverse().join('')) ?? '';