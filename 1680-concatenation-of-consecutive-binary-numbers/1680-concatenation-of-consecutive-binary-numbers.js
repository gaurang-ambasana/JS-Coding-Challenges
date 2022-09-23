/**
 * @param {number} n
 * @return {number}
 */
const concatenatedBinary = n => {
    let ans = 1, len = 4;
    
    for (let i = 2, x = n + 1; i < x; i++) {
        if (i === len) len *= 2;
        ans = (ans * len + i) % 1000000007;
    }
    
    return ans;
};