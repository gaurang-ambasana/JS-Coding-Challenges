/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = nums => nums.reduce((c, e, i) => nums.slice(i + 1).reduce((s, n) => n == e ? ++s : s, c), 0);