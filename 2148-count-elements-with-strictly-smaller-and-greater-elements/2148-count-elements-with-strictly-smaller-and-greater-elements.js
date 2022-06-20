/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {    
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    
    return nums.reduce((count, ele) => ele !== max && ele !== min ? ++count : count, 0);
}