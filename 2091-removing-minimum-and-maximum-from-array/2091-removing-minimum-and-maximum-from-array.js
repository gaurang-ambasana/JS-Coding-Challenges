/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumDeletions = function(nums) {
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    const idxMax = nums.indexOf(max);
    const idxMin = nums.indexOf(min);
    
    return Math.min(Math.max(idxMax, idxMin) + 1, nums.length - Math.min(idxMax, idxMin), Math.min(idxMax, idxMin) + 1 + nums.length - Math.max(idxMax, idxMin));
};