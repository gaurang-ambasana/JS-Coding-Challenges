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
    
    Object.keys(freq)
        .filter(key => freq[key] === degree)
        .forEach(key => 
          minLen = Math.min(minLen, nums.lastIndexOf(parseInt(key)) - nums.indexOf(parseInt(key)) + 1)
         );
    
    return minLen;
};