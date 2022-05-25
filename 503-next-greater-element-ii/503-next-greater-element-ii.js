/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElements = nums => nums.map((n, i) => i !== nums.length ? (nums.slice(i).find((m) => m > n) ?? (nums.find((m) => m > n) ?? -1)) : (nums.find((m) => m > n) ?? -1));