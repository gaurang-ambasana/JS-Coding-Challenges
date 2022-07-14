/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = (nums) => nums.reduce((c, e, i) => nums.slice(i + 1).reduce((s, n) => n === e ? ++s : s, c), 0);