/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
const isPrefixString = (s, words) => {
    let str = '';
    
    for (let i = 0; i < words.length; i++) {
        str += words[i];
        if (str === s) return true;
        if (str.length > s.length) break;
    }
    
    return false;
};