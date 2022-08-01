/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = s => s.split(``).map((c, i) => isNaN(parseInt(c)) ? c : String.fromCharCode(s.charCodeAt(i - 1) + parseInt(c))).join(``);