/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {
    function getPattern(str) {
        const map = new Map();
        
        let id = 0, pattern = ``;
        
        for (let i = 0, n = str.length; i < n; i++) {
            const char = str[i];
            
            if (!(map.has(char)))
                map.set(char, ++id);
            
            pattern += map.get(char);
        }
        
        return pattern;
    }
    
    return getPattern(s) === getPattern(t);
}