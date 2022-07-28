/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = nums => nums.sort((a, b) => a - b).find((n, i) => n - nums[i + 1] === 0);