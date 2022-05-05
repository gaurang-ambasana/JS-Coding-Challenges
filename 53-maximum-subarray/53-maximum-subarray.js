/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let prev = -Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        prev = Math.max(nums[i], nums[i] + prev);
        max = Math.max(prev, max);
    }
    
    return max;
};