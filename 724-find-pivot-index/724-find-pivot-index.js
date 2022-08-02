/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = nums => {
    if (nums.slice(1).reduce((s, e) => s + e, 0) === 0)
        return 0;
        
    for (let i = 1, n = nums.length; i < n; i++)
        if (nums.slice(0, i).reduce((s, e) => s + e, 0) === nums.slice(i + 1).reduce((s, e) => s + e, 0))
            return i;
    
    return -1;
};