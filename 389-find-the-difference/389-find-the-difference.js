/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    s.split('').forEach(char => t = t.replace(char, ''));
    return t;
};