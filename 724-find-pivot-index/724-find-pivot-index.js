/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = nums => {
    const total = nums.reduce((sum, e) => sum + e, 0);
    
    let leftSum = 0;
    
    return nums.findIndex(n => {
        if (leftSum === total - n - leftSum)
            return true;
        leftSum += n;
    });
}