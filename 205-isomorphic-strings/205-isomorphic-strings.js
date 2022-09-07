/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {
    function getPattern(str) {
        const map = {};
        
        let id = 0, pattern = ``;
        
        for (let i = 0, n = str.length; i < n; i++) {
            const char = str[i];
            
            if (char in map)
                pattern += map[char];
            else {
                map[char] = ++id;
                pattern += map[char];
            }
        }
        
        return pattern;
    }
    
    return getPattern(s) === getPattern(t);
}