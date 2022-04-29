/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let count = 1;
    let maxCount = 1;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i+1]) count++;
        else count = 1;
        maxCount = Math.max(count, maxCount);
    }
    
    return maxCount;
};