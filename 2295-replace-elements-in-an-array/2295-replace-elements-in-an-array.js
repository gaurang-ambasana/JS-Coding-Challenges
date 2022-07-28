/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
const arrayChange = (nums, operations) => {
    const map = nums.reduce((o, n, i) => (o[n] = i, o), {});
    
    for (let i = 0, n = operations.length; i < n; i++) {
        const [org, num] = operations[i];
        nums[map[org]] = num;
        map[num] = map[org];
    }
    
    return nums;
};