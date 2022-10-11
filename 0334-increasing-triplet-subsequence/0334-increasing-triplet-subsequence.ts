function increasingTriplet(nums: number[]): boolean {
    let i: number = Infinity, j: number = Infinity;
    
    for (let x: number = 0, n: number = nums.length; x < n; x++) {
        const curr: number = nums[x];
        
        if (curr <= i)
            i = curr;
        else if (curr <= j)
            j = curr;
        else return true;
    }
    
    return false;
}