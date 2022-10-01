/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let dp = Array(s.length + 1).fill(0);
    dp[0] = 1;
    dp[1] = s[0] === '0' ? 0 : 1;
    
    for(let i = 2, n = s.length; i < n + 1; i++) {
        const oneDigit = parseInt(s.substring(i - 1, i));
        const twoDigit = parseInt(s.substring(i - 2, i));
        
        console.log(oneDigit, twoDigit);
        
        if (oneDigit > 0)
            dp[i] += dp[i - 1];
        
        if (twoDigit > 9 && twoDigit < 27)
            dp[i] += dp[i - 2];
    }
    
    return dp[s.length];
};