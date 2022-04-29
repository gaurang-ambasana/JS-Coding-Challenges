/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.includes(target)) return nums.indexOf(target);
    if (nums.every(d => d < target)) return nums.length;
    if (nums.every(d => d > target)) return 0;
    
    return nums.indexOf(nums.find((d, i) =>  d < target && nums.at(i + 1) > target)) + 1;
    
};