/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    if (nums1.length > nums2.length) 
        return nums1.filter(n => nums1.includes(n) && nums2.includes(n) && nums2.splice(nums2.indexOf(n), 1));
    else return nums2.filter(n => nums1.includes(n) && nums2.includes(n) && nums1.splice(nums1.indexOf(n), 1));
};