/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function(sentence) {
    return sentence.split(' ').filter(s => s.match(/^[a-z]+(-[a-z]+)?[\.!,]?$/) || s.match(/^[\.!,]$/)).length;
};