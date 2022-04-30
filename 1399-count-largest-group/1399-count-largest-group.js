/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    const getDigitSum = (num) => num.toString().split('').map(Number).reduce((a, d) => a + d, 0);
    const res = {};
    
    for (let i = 1; i <= n; i++) {
        if (res[getDigitSum(i)]) res[getDigitSum(i)].push(i);
        else res[getDigitSum(i)] = [i];
    }
    
    const groups = Object.values(res);
    const maxGroupSize = Math.max(...groups.map(arr => arr.length));
    
    return groups.filter(arr => arr.length === maxGroupSize).length;
};