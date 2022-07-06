/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const hash = new Map();
    
    for (const [i, j] of nums.entries()) {
        if (hash.has(j) && (i - hash.get(j) <= k))
            return true;
        
        hash.set(j, i);
    }
    
    return false;
};