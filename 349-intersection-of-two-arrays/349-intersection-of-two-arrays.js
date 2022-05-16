/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => nums1.length > nums2.length ? [...new Set(nums1.filter((num) => nums2.includes(num)))] : [...new Set(nums2.filter((num) => nums1.includes(num)))];