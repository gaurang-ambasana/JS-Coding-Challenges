/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = (nums) => new Set(nums).size >= 3 ? [...new Set(nums)].sort((a, b) => b - a)[2] : [...new Set(nums)].reduce((max, e) => max > e ? max : e, -Infinity);