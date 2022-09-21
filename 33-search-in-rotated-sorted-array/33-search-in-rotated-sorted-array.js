/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.includes(target)) { 
        let n = nums.length;
        const initialIdx = nums.indexOf(target);
    
        if (JSON.stringify(nums) === JSON.stringify([...nums].sort((a, b) => a - b)))
            return initialIdx;
        
        while (n--) {
            nums.push(nums.shift());
            if (JSON.stringify(nums) === JSON.stringify([...nums].sort((a, b) => a - b)))
                return initialIdx;
        }
    
        return -1;
    } else return -1;
};