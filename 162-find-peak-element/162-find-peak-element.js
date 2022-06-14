/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = nums => {
    const map = nums.reduce((o, n, i) => (o[i] = n, o), {
        "-1": -Infinity,
        [nums.length]: -Infinity
    });
    
    return nums.findIndex((n, i) => n > map[i + 1] && n && map[i - 1]);
};
