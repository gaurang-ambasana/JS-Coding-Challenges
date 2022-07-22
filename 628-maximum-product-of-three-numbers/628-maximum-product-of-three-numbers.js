/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = nums => {
    if (nums.length === 3)
        return nums[0] * nums[1] * nums[2];
    else {
        nums.sort((a, b) => b - a);
        return Math.max(nums[0] * nums[1] * nums[2], nums.at(-1) * nums.at(-2) * nums[0]);
    }
};