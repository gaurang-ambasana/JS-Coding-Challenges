/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countKDifference = (nums, k, count = 0) => {
    for (let i = 0, n = nums.length; i < n; i++)
        for (let j = i + 1; j < n; j++)
            if (Math.abs(nums[i] - nums[j]) === k)
                count++;
    
    return count;
}