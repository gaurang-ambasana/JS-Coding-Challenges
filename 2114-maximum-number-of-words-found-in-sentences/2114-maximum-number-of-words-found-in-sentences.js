/**
 * @param {string[]} sentences
 * @return {number}
 */
const mostWordsFound = (sentences) => sentences.reduce((max, s) => Math.max(max, s.split(' ').length), 0);