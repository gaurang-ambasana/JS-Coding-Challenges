/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
const arrayChange = (nums, operations) => {
    const map = nums.reduce((o, n, i) => (o[n] = i, o), {});
    
    for (let i = 0, n = operations.length; i < n; i++) {
        const [org, num] = operations[i];
        const idx = map[org];
        nums[idx] = num;
        map[num] = idx;
    }
    
    return nums;
};