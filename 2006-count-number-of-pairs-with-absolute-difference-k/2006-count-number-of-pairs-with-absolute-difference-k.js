/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countKDifference = (nums, k) => nums.reduce((count, n, i) => nums.slice(i + 1).reduce((c, x) => Math.abs(x - n) === k ? ++c : c, count), 0);