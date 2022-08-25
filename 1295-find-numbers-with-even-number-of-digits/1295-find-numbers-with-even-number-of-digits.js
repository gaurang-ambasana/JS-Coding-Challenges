/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = nums => nums.reduce((c, n) => n.toString().length % 2 ? c : ++c, 0);