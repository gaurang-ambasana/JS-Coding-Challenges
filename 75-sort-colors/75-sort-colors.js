/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
    const counter = nums.reduce((c, n) => (c[n] = (c[n] ?? 0) + 1, c), {});
    let start = 0;
    nums.length = 0;
    while (start < 3) {
        for (let i = 0; i < counter[start]; i++) nums.push(start);
        ++start;
    }
};