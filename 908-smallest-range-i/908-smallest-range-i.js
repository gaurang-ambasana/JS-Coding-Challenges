/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const smallestRangeI = (nums, k) => Math.max(0, Math.max.apply(null, nums) - Math.min.apply(null, nums) - 2 * k);