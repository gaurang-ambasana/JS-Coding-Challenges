/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = (nums, n) => {
    const x = nums.slice(0, n);
    const y = nums.slice(-n);
    
    const res = [x[0], y[0]];
    
    for (let i = 1; i < n; i++)
        res.push(x[i], y[i]);
    
    return res;
};