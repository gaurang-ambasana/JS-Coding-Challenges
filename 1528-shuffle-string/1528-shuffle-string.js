/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = (s, indices) => Object.values(indices.reduce((o, n, i) => (o[n] = s[i], o), {})).join(``);