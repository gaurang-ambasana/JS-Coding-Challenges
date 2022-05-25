/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElements = nums => nums.map((n, i) => nums.slice(i).find(m => m > n) ?? (nums.find(m => m > n) ?? -1));