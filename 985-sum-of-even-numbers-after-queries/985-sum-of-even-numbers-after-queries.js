/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
function sumEvenAfterQueries(nums, queries) {
    let sum = nums.filter(x => x % 2 === 0).reduce((sum, x) => sum + x, 0);
    
    return queries.map(([n, i]) => {
        const wasEven = nums[i] % 2 === 0;
        
        nums[i] += n;
        const isEven = nums[i] % 2 === 0;
        
        if (wasEven && isEven) sum += n;
        else if (!wasEven && isEven) sum += nums[i];
        else if (wasEven && !isEven) sum -= nums[i] - n;
        
        return sum;
    });
}