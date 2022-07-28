/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = (nums, operations) => {
    const map = nums.reduce((o, n, i) => (o[n] = i, o), {});
    
    for (const [org, num] of operations) {
        nums[map[org]] = num;
        map[num] = map[org];
    }
    
    return nums;
};