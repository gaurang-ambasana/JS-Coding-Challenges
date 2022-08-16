/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canBeIncreasing = nums => {
    for (let i = 0, n = nums.length; i < n; i++) {
        const arr = nums.slice(0, i).concat(nums.slice(i + 1));
        
        if (arr.slice(1).every((e, i) => e > arr[i]))
            return true;
    }
    
    return false;
}