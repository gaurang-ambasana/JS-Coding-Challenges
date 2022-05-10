/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    return Object.entries(s.split('').reduce((acc, char) => (acc[char] = (acc[char] ?? 0) + 1, acc), {})).sort((a, b) => b[1] - a[1]).map(([char, freq]) => char.repeat(freq)).join('');
};