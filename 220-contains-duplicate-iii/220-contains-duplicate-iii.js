/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    for (let i = 0, n = nums.length; i < n; i++)
        for (let j = 0; j < n; j++)
            if (i !== j && Math.abs(i - j) < k + 1 && Math.abs(nums[i] - nums[j]) < t + 1)
                return true;
    
    return false;
};