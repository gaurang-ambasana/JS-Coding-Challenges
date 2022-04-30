/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    const getDigitSum = (num) => num.toString().split('').map(Number).reduce((a, d) => a + d, 0);
    const res = {};
    
    for (let i = 1; i <= n; i++) {
        const sum = getDigitSum(i);
        if (res[sum]) res[sum].push(i);
        else res[sum] = [i];
    }
    
    const groupSize = Object.values(res).map(arr => arr.length);
    const maxGroupSize = Math.max(...groupSize);
    
    return groupSize.filter(size => size === maxGroupSize).length;
};