/**
 * @param {number[]} satisfaction
 * @return {number}
 */
const maxSatisfaction = satisfaction => satisfaction
    .sort((a, b) => a - b)
    .map((_, i, arr) => arr.slice(i).reduce((a, e, idx) => a + (e * (idx + 1)), 0))
    .reduce((max, e) => max > e ? max : e, 0);