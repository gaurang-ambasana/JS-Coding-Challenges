/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = (words, pattern) => {
    const getPatternCode = s => s.split(``).reduce((code, e) => {
        if (!(e in code.obj))
            code.obj[e] = code.id++;
        
        code.str += code.obj[e];
        return code;
    }, { id: 0, obj: {}, str: `` }).str;
    
    const patternCode = getPatternCode(pattern);
    
    return words.filter(w => getPatternCode(w) === patternCode);
}