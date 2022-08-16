/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = nums => {
    for (let i = 0, n = nums.length; i < n; i++) {
        const arr = nums.slice(0, i).concat(nums.slice(i + 1));
        
        if (arr.every((e, i) => i === 0 || e > arr[i - 1]))
            return true;
    }
    
    return false;
}