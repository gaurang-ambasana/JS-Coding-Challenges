/**
 * @param {string} s
 * @return {boolean}
 */
const halvesAreAlike = s => s.slice(0, s.length / 2).replace(/[^aeiou]/ig).length === s.slice(s.length / 2, s.length).replace(/[^aeiou]/ig).length;