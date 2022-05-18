/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = (pattern, s) => {
    const sArr = s.split(' ');
    
    if (pattern.length !== sArr.length) return false;
    if (new Set(pattern.split('')).size !== new Set(sArr).size)
        return false;
    
    const hash = {};
    
    for (let i = 0; i < sArr.length && i < pattern.length; i++) {
        if (pattern[i] in hash) {
            if (hash[pattern[i]] !== sArr[i])
                return false;
        } else hash[pattern[i]] = sArr[i];
    }
    
    return true;
};