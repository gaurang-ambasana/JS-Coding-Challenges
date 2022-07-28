/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = (nums) => {
    return Object.entries(nums.reduce((c, n) => (c[n] = (c[n] ?? 0) + 1, c), {})).filter(([, f]) => f > 1).map(([n,]) => n);
};