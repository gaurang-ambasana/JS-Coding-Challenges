/**
 * @param {number[]} nums
 * @return {number}
 */
const arraySign = (nums) => {
    const product = nums.reduce((p, n) => p * n, 1);
    return product > 0 ? 1 : product < 0 ? -1 : 0;
}