function largestPerimeter(nums: number[]): number {
    nums.sort((a, b) => a - b);
    
    for (let i: number = nums.length - 1; i > 1; i--) {
        const a: number = nums[i];
        const b: number = nums[i - 1];
        const c: number = nums[i - 2];
        
        if (b + c > a) {
            return a + b + c;
        }
    }
    
    return 0;
};