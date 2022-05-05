/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return nums.some((ele, i) => i !== nums.lastIndexOf(ele));
};