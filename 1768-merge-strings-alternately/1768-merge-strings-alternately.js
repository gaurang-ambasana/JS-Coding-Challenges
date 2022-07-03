/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let output = '';
    
    for (let i = 0, n = Math.min(word1.length, word2.length); i < n; i++) {
        output += word1[i];
        output += word2[i];
    }
    
    if (word1.length !== word2.length) {
        if (word1.length > word2.length) {
            word1 = word1.substring(output.length / 2, word1.length);
            output += word1;
            return output;
        } else {
            word2 = word2.substring(output.length / 2, word2.length);
            output += word2;
            return output;
        }
    }
    
    return output;
};