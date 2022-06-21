/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
const kWeakestRows = (mat, k) => mat.map((row, i) => [ row.filter(Boolean).length, i]).sort((a, b) => a[0] - b[0]).slice(0, k).map(([_, i]) => i);