/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let degree = 0;
    let minLen = Infinity;
    
    const freq = nums.reduce((acc, num) => {
        acc[num] = acc[num] ? ++acc[num] : 1;
        degree = Math.max(acc[num], degree);
        return acc;
    }, {});
    
    Object.entries(freq).map(([key, val]) => [parseInt(key), val])
        .filter(([_, val]) => val === degree)
        .forEach(([key, _]) => 
          minLen = Math.min(minLen, nums.lastIndexOf(key) - nums.indexOf(key) + 1)
         );
    
    return minLen;
};