/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let lower = 0, higher = 0;
    
    for (let i = 0; i < s.length; i++) {
        lower += s[i] === '(' ? 1 : -1;
        higher += s[i] !== ')' ? 1 : -1;
        if (higher < 0) break;
        lower = Math.max(lower, 0)
    }
    
    return lower === 0;
};