/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = (arr) => new Set(Object.values(arr.reduce((c, n) => (c[n] = (c[n] ?? 0) + 1, c), {}))).size === new Set(arr).size;