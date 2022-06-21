/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let start = 0;
    let max = 0;
    
    while (start < nums.length) {
        for (let i = 0; i < nums.length; i++) {
            if (i !== start)
                max = Math.max(max, (nums[start] - 1) * (nums[i] - 1));
        }
        
        start++;
    }
    
    return max;
};