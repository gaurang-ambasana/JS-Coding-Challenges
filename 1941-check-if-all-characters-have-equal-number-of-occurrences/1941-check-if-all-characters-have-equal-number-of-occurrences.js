/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = s => new Set(Object.values(s.split(``).reduce((a, c) => (a[c] = (a[c] ?? 0) + 1, a), {}))).size === 1;