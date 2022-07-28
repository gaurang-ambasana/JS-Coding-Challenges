/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = nums => {
    const n = nums.length;
    const ans = [...Array(n).keys()].map(i => i + 1);
    
    for (let i = 0; i < n; i++)
        ans[nums[i] - 1] = false;
    
    return ans.filter(x => x);
};