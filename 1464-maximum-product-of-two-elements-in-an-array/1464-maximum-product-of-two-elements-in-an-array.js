/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = nums => {
    let j = 0;
    let max = 0;
    
    while (j < nums.length) {
        for (let i = 0; i < nums.length; i++) {
            if (i !== j)
                max = Math.max(max, (nums[j] - 1) * (nums[i] - 1));
        }
        
        j++;
    }
    
    return max;
};