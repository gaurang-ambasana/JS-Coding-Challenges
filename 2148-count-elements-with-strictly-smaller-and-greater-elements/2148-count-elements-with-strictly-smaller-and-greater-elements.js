/**
 * @param {number[]} nums
 * @return {number}
 */
const countElements = (nums) => nums.sort((a, b) => b - a).reduce((count, ele, _, arr) => ele !== arr.at(0) && ele !== arr.at(-1) ? ++count : count, 0);