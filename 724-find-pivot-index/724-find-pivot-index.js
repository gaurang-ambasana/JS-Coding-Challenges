/**
 * @param {number[]} nums
 * @return {number}
 */
function pivotIndex(nums) {
    const total = nums.reduce((s, n) => s + n, 0);
    
    let leftSum = 0
    
    for (let i = 0, n = nums.length; i < n; i++) {
        const n = nums[i];
        if (leftSum === total - n - leftSum)
            return i;
        leftSum += n;
    }
    
    return -1;
}