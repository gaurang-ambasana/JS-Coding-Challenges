/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => nums.sort((a, b) => b - a).at(k - 1);