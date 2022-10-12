function largestPerimeter(nums: number[]): number {
    nums.sort((a, b) => a - b);
    
    for (let i: number = nums.length - 1; i > 1; i--) {
        const a: number = nums[i];
        const b: number = nums[i - 1];
        const c: number = nums[i - 2];
        
        const sides: number = b + c;
        
        if (sides > a)
            return a + sides;
    }
    
    return 0;
};