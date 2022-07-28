/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = (nums) => Object.entries(nums.reduce((c, n) => (c[n] = (c[n] ?? 0) + 1, c), {})).find(([, f]) => f > 1)[0];