/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = nums => nums.length - nums.filter(n => n.toString().length % 2).length;