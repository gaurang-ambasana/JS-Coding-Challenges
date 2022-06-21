/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
const kWeakestRows = (mat, k) => mat.map((row, i) => row.reduce((o, e) => e === 1 ? (o[1] += 1, o) : o, {1: 0, i})).sort((a, b) => a[1] - b[1]).slice(0, k).map(({i}) => i);