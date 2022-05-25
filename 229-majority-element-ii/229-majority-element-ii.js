/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    return Object.entries(nums.reduce((c, n) => (c[n] = (c[n] ?? 0) + 1, c), {})).reduce((acc ,[key, val]) => {
        if (val > nums.length / 3) acc.push(key);
        return acc;
    }, [])
};