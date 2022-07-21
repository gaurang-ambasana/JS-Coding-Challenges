/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = (nums) => {
    const max = nums.reduce((m, n) => m > n ? m : n, -1);
    const idx = nums.indexOf(max);
    nums.splice(idx, 1);
    return nums.every(n => max >= n * 2) ? idx : -1;
};