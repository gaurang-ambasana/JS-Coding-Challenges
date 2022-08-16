/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    for (let i = 0, n = nums.length; i < n; i++) {
        const arr = [...nums];
        arr.splice(i, 1);
        
        const set = [...new Set(arr)];
        
        if (set.length === arr.length && set.sort((a, b) => a - b).every((e, i) => e === arr[i])) {
            return true;
        }
    }
    
    return false;
}