/**
 * @param {number[]} nums
 * @return {number[]}
 */
const frequencySort = (nums) => {
    const counter = nums.reduce((c, a) => (c[a] = (c[a] ?? 0) + 1, c), {});
    return nums.sort((a, b) => {
        const diff = counter[a] - counter[b] 
        return diff !== 0 ? diff : b - a;
    });
}