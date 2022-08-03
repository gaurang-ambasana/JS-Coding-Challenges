/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = (s, t) => {
    const hash1 = {}, hash2 = {};
    
    for (let i = 0, n = s.length; i < n; i++) {
        const [c1, c2] = [s[i], t[i]];
        
        if (!hash2[c2] && !hash1[c1])
            [hash1[c1], hash2[c2]] = [c2, c1];
        else if (hash1[c1] !== c2 || hash2[c2] !== c1)
            return false;
    }
    
    return true;
}