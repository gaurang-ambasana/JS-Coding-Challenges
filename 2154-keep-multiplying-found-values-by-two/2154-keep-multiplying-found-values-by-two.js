/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
const findFinalValue = (nums, original) => {
    while (nums.includes(original))
        original *= 2;
    
    return original;
};