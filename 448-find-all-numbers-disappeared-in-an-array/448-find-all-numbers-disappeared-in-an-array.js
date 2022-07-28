/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {
    const ans = Array(nums.length).fill().map((_, i) => i + 1);
    
    for (let i = 0, n = nums.length; i < n; i++)
        ans[nums[i] - 1] = false;
    
    return ans.filter(Boolean);
};