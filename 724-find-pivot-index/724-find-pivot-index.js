/**
 * @param {number[]} nums
 * @return {number}
 */
function pivotIndex(nums) {
    const total = nums.reduce((s, n) => s + n, 0);
    
    let runningSum = 0
    
    for (let i = 0, n = nums.length; i < n; i++) {
        const n = nums[i];
        
        if (runningSum === total - n - runningSum)
            return i;
        
        runningSum += n;
    }
    
    return -1;
}