/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isMonotonic = nums => nums.every((n, i) => i === 0 ||nums[i - 1] >= n) || nums.every((n, i) => i === 0 || nums[i - 1] <= n);