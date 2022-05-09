/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let diff = 0, left = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        const right = nums[i];
        if(left === right) continue;
        if(left > right) left = right;
        diff = Math.max(diff, right - left);
    }
    
    return diff === 0 ? -1 : diff;
};