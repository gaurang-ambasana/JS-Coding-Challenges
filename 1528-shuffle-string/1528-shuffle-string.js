/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    return Object.values(indices.reduce((o, n, i) => (o[n] = s[i], o), {})).join(``);
};