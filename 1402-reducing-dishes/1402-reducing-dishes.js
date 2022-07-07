/**
 * @param {number[]} satisfaction
 * @return {number}
 */
const maxSatisfaction = (satisfaction) => Math.max(0, ...satisfaction.sort((a, b) => a - b).map((_, i, arr) => arr.slice(i).reduce((a, e, idx) => a + (e * (idx + 1)), 0)));