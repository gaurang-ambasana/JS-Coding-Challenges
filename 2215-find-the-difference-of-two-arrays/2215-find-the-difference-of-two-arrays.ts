function findDifference(nums1: number[], nums2: number[]): number[][] {
    const nums1Set = new Set(nums1), nums2Set = new Set(nums2);

    return [Array.from(nums1Set).filter(n => !nums2Set.delete(n)), Array.from(nums2Set)];
}