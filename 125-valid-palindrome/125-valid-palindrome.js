/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const validS = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    console.log(validS)
    return validS === validS.split('').reverse().join('');
};