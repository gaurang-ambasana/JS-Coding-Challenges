/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = (s, p) => new RegExp(`^${p}$`).test(s);