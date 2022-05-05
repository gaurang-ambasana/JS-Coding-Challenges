/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let prev = -Infinity;
    
    for (const currentNum of nums) {
        prev = Math.max(currentNum, currentNum + prev);
        max = Math.max(prev, max);
    }
    
    return max;
};