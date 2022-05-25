/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = (nums1, nums2) => nums1.map(n => {
    const start = nums2.indexOf(n);
    const greaterElm = nums2.slice(start).find(m => m > n);
    return greaterElm ?? -1;
});