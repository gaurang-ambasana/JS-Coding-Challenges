/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    const max = Math.max(...nums);
    return nums.indexOf(max);
};