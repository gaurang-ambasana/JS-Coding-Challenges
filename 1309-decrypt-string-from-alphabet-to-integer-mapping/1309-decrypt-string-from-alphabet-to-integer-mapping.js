/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    const alphabets = `_abcdefghijklmnopqrstuvwxyz`;
    let ans = ``;
    
    for (let i = 0, n = s.length; i < n; i++)
        if (s[i] !== `#`)
            if (s[i + 2] === `#`) {
                ans += alphabets[s[i] + s[i + 1]];
                i += 2;
            }
            else ans += alphabets[s[i]];
    
    return ans;
}