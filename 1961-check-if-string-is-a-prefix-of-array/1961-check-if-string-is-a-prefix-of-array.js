/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let flag = false;
    
    words.reduce((final, current) => {
        if (flag) return final;
        else {
            final += current;
            if (final === s) flag = true;
        }
        return final;
    }, '');
    
    return flag;
};