/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
const kWeakestRows = (mat, k) => mat.map((row, i) => ({1: row.filter(Boolean).length, i})).sort((a, b) => a[1] - b[1]).slice(0,k).map(({i}) => i);