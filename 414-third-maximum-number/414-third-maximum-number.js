/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    return new Set(nums).size >= 3 ? [...new Set(nums)].sort((a, b) => b - a)[2] : [...new Set(nums)].reduce((max, e) => max > e ? max : e, -Infinity);
};