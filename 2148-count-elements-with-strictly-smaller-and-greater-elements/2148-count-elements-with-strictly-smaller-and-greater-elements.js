/**
 * @param {number[]} nums
 * @return {number}
 */
const countElements = nums => {    
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    
    return nums.reduce((count, ele) => ele !== max && ele !== min ? ++count : count, 0);
}