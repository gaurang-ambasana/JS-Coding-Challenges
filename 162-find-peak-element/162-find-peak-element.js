/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = (nums) => {
    const map = nums.reduce((o, n, i) => (o[i] = n, o), {
        "-1": -Infinity,
        [nums.length]: -Infinity, 
    });
    
    for (let i = 0; i < nums.length; i++)
        if (map[i] > map[i - 1] && map[i] > map[i + 1])
            return i;
};