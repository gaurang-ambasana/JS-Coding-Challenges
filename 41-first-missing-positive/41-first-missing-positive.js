/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    if (!nums.includes(1))
        return 1;
    
    nums = [...new Set(nums)].filter(n => n > 0).sort((a, b) => a - b);
    
    const max = nums.at(-1) + 1;
    const min = nums[0];
    
    for (let i = min, j = 0; i < max; i++, j++)
        if (i !== nums[j])
            return i;
    
    return max;
};