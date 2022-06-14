/**
 * @param {string} s
 * @return {string}
 */
const makeGood = (s) => s.split(/.*?/).reduce((str, c) => ((c === c.toUpperCase() && (c.toLowerCase() === str[str.length - 1])) || (c === c.toLowerCase() && (c.toUpperCase() === str[str.length - 1]))) ? str.slice(0, -1) : str.concat(c), '');