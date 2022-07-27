/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    for (let i = 0, n = nums.length; i < n; i++)
        for (let j = 0; j < n; j++)
            if (i !== j)
                if (Math.abs(nums[i] - nums[j]) < t + 1)
                    if (Math.abs(i - j) < k + 1)
                        return true;
    
    return false;
};