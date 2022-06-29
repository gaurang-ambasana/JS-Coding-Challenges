/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = (nums) => {
    nums.sort((a, b) => a - b);
    
    for (let i = nums.length - 1; i >= 2; i--) {
        const a = nums[i];
        const b = nums[i - 1];
        const c = nums[i - 2];
        
        if (b + c > a) return a + b + c;
    }
    
    return 0;
};