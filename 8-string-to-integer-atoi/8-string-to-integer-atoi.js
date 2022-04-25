/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const number = isNaN(parseInt(s)) ? 0 : parseInt(s);
    const max = 2 ** 31 - 1;
    const min = 2 ** 31 * -1;
    if (number > max) return max;
    if (number < min) return min;
    return number;
};