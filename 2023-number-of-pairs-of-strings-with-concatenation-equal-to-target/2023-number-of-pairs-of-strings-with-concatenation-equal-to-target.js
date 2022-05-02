/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function(nums, target) {
    let count = 0;
    let start = 0;
    
    while (start < nums.length) {
        for (let i = 0; i < nums.length; i++) 
            i !== start && nums[i] + nums[start] === target && count++;
        
        start++;
    }
    
    return count;
};