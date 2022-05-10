/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    return s.split('').findIndex(char => s.indexOf(char) === s.lastIndexOf(char));
};