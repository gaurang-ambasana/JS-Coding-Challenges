function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const table: { [index: number]: number } = {};
    
    for (const [i, j] of nums.entries()) {
        if (j in table && Math.abs(i - table[j]) <= k)
            return true;
        else table[j] = i;
    }
    
    return false;
};