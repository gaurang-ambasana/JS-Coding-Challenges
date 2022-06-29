/**
 * @param {number[]} nums
 * @return {number}
 */
const arraySign = (nums) => nums.includes(0) ? 0 : Math.sign(nums.reduce((p, n) => p * n, 1));