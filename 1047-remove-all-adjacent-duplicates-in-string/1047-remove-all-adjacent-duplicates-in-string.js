/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = (s) => s.split(``).slice(1).reduce((str, c) => str.at(-1) === c ? str.slice(0, -1) : (str += c), s[0]);