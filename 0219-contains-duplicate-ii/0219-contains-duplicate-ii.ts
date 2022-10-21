function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const table: { [index: number]: number } = {};
    
    for (let i = 0, n = nums.length; i < n; i++)
        if (nums[i] in table && Math.abs(i - table[nums[i]]) <= k)
            return true;
        else table[nums[i]] = i;
    
    return false;
};