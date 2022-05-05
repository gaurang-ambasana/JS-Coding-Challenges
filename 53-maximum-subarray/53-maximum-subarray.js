/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let prev = -Infinity;
    
    for (const current of nums) {
        prev = Math.max(current, current + prev);
        max = Math.max(prev, max);
    }
    
    return max;
};