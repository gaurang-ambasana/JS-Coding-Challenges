/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const total = nums.reduce((s, n) => s + n, 0);
    
    for (let i = 0, n = nums.length; i < n; i++) {
        const leftSum = nums.slice(0, i).reduce((s, n) => s + n, 0);
        
        if (leftSum === total - nums[i] - leftSum)
            return i;
    }
    
    return -1;
}