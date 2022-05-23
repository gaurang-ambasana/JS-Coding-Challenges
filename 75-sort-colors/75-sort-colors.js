/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
    const counter = nums.reduce((c, n) => (c[n] = (c[n] ?? 0) + 1, c), {});
    let num = 0;
    nums.length = 0;
    while (num < 3) {
        for (let i = 0; i < counter[num]; i++) nums.push(num);
        ++num;
    }
};