/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
    const ones = s.replaceAll('0', ',').split(',').filter(({ length }) => length > 0).reduce((max, { length }) => max > length ? max : length, 0);
    const zeroes = s.replaceAll('1', ',').split(',').filter(({ length }) => length > 0).reduce((max, { length }) => max > length ? max : length, 0);
    
    return ones > zeroes;
};