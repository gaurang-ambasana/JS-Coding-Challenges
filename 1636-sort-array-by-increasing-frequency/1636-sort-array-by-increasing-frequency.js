/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = (nums) => {
    const counter = nums.reduce((c, a) => (c[a] = (c[a] ?? 0) + 1, c), {});
    
    return nums.sort((a, b) => counter[a] - counter[b] !== 0 ? counter[a] - counter[b] : b - a);
}