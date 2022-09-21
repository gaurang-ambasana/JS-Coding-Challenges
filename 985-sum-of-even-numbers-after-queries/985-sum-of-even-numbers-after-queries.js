/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    return queries.map(([n, i]) => {
        nums[i] += n;
        return nums.filter(x => x % 2 === 0).reduce((sum, x) => sum + x, 0);
    });
};