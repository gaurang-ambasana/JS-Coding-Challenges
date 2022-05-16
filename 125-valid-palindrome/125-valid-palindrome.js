/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
    const validS = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    return validS === validS.split('').reverse().join('');
};