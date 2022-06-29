/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => nums.splice(0, 0, ...nums.splice(nums.length - (k % nums.length), (k % nums.length)));