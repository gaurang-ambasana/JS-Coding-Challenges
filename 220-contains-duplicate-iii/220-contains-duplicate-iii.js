/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
const containsNearbyAlmostDuplicate = (nums, k, t) => {
    for (let i = 0, n = nums.length; i < n; i++)
        for (let j = i + 1; j < i + k + 1; j++)
            if (Math.abs(nums[i] - nums[j]) < t + 1)
                return true;
    
    return false;
}