/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 1;
    let maxCount = 1;
    
    if (nums.indexOf(1) < 0) return 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1 && nums[i+1] === 1) count++;
        else count = 1;
        maxCount = Math.max(count, maxCount);
    }
    
    return maxCount;
};