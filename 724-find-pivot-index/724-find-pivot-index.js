/**
 * @param {number[]} nums
 * @return {number}
 */
function pivotIndex(nums) {
    const total = nums.reduce((s, n) => s + n, 0);
    
    let runningSum = 0;
    
    return nums.findIndex(n => {
        if (runningSum === total - n - runningSum)
            return true;
        runningSum += n;
    });
}