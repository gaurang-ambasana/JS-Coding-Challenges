/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let prev = -Infinity;
    
    for (const num of nums) {
        prev = Math.max(num, num + prev);
        max = Math.max(prev, max);
    }
    
    return max;
};