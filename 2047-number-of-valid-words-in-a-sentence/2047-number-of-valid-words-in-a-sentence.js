/**
 * @param {string} sentence
 * @return {number}
 */
const countValidWords = (sentence) => sentence.split(/\s+/).filter(s => s.match(/^[a-z]+(-[a-z]+)?[\.!,]?$/) || s.match(/^[\.!,]$/)).length;