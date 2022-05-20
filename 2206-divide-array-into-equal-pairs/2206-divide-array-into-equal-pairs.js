/**
 * @param {number[]} nums
 * @return {boolean}
 */
const divideArray = nums => Object.values(nums.reduce((c, a) => (c[a] = (c[a] ?? 0) + 1, c), {})).every(val => val % 2 === 0);