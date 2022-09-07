/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
    for (let i = 0, n = s.length; i < n; i++) {
        const idx = t.indexOf(s[i]) + 1;      
        if (idx) t = t.slice(idx);
        else return false;
    }
    
    return true;
}