/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isSubsequence(s, t) {
    for (let i = 0, n = s.length; i < n; i++) {
        const idx = t.search(s[i]);
        
        if (idx > -1) {
            t = t.slice(idx + 1);
        } else return false;
    }
    
    return true;
}