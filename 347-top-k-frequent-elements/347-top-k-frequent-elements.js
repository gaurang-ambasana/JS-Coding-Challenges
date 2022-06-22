/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
    const frequency = nums.reduce((counter, n) => (counter[n] = (counter[n] ?? 0) + 1, counter), {});
    return [...new Set(nums)].sort((a, b) => frequency[b] - frequency[a]).slice(0, k);    
};