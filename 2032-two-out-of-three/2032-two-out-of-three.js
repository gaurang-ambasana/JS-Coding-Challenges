/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    const common = [...nums1, ...nums2, ...nums3].filter(val => 
        (nums1.includes(val) && nums2.includes(val)) || 
        (nums3.includes(val) && nums2.includes(val)) || 
        (nums1.includes(val) && nums3.includes(val)))
    return [...new Set(common)];
};