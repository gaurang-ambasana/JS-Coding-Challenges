/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
const createTargetArray = (nums, index) => {
    const target = [];
    
    for (let i = 0, l = index.length; i < l; i++)
        target.splice(index[i], 0, nums[i]);
    
    return target;
};