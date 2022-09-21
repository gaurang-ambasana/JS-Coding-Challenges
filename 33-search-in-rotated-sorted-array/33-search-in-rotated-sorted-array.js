/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.includes(target)) { 
        let n = nums.length;
        const initialIdx = nums.indexOf(target);
        
        while (n--)
            if (JSON.stringify(nums) === JSON.stringify([...nums].sort((a, b) => a - b))) return initialIdx;
            else nums.push(nums.shift());
    
        return -1;
    } else return -1;
};