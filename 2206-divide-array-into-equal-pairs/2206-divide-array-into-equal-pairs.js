/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    return Object.values(nums.reduce((c, a) => (c[a] = (c[a] ?? 0) + 1, c), {})).every(val => val % (nums.length / (nums.length / 2)) === 0);
};