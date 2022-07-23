/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
const removeOccurrences = (s, part) => {
    let len;
    
    while (len !== s.length) {
        len = s.length;
        s = s.replace(part, ``);
    }
    
    return s;
};