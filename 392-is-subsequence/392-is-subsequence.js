/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    for (let i = 0, n = s.length; i < n; i++) {
        const idx = t.indexOf(s[i]);
        
        if (idx > -1) {
            t = t.slice(idx + 1);
        } else return false;
    }
    
    return true;
}