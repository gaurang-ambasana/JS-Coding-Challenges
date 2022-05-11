/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const regex = new RegExp(`.{1,${k}}`, 'g');
    return s.match(regex).map((s, i) => i % 2 === 0 ?s.split('').reverse().join('') : s).join('');
};