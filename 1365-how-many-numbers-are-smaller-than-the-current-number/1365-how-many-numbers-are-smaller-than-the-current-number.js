/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = (nums) => nums.map((n) => nums.reduce((c, e) => e < n ? ++c : c, 0));