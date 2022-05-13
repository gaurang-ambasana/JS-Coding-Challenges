/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
const isPrefixString = (s, words) => {
    let flag = false;
    
    words.reduce((final, current) => {
        if (flag) return final;
        final += current;
        if (final === s) flag = true;
        return final;
    }, '');
    
    return flag;
};