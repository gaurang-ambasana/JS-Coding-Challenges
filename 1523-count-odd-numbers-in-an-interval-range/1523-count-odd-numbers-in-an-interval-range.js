/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const countOdds = (low, high) => low % 2 ? Math.floor((high - low) / 2) + 1 : Math.round((high - low) / 2);