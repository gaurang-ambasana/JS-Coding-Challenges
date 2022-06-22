/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = (words, k) => Object.entries(words.reduce((c, w) => (c[w] = (c[w] ?? 0) + 1, c), {})).sort((a, b) => b[1] - a[1] === 0 ? a[0].localeCompare(b[0]) : b[1] - a[1]).slice(0, k).map(([w, _]) => w);