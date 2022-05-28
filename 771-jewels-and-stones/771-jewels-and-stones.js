/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = (jewels, stones) => stones.split('').reduce((num, s) => jewels.includes(s) ? ++num : num, 0);