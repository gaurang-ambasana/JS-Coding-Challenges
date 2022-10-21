function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const table: { [index: number]: number } = {};
    
    for (let i = 0, n = nums.length; i < n; i++) {
        const j = nums[i];
        
        if (j in table && Math.abs(i - table[j]) <= k)
            return true;
        else table[j] = i;
    }
    
    return false;
};