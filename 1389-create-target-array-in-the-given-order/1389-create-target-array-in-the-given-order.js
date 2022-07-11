/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
const createTargetArray = (nums, index) => {
    const res = [];
    
    for (let i = 0, n = nums.length; i < n; i++)
        res.splice(index[i], 0, nums[i]);
    
    return res;
};