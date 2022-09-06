/**
 * @param {number[]} nums
 * @return {number[]}
 */
function runningSum(nums) {
    const res = [nums[0]];
    
    for (let i = 1; i < nums.length; i++)
        res.push(nums[i] + res[i - 1]);
    
    return res;
};