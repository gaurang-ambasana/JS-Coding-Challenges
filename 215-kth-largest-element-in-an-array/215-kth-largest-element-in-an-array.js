/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = (nums, k) => nums.sort((a, b) => b - a)[k - 1];