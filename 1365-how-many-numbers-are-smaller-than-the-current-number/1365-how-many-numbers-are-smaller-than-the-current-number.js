/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    return nums.map(n => nums.reduce((c, e) => e < n ? ++c : c, 0));
};