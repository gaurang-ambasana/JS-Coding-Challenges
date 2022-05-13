/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
const isPrefixOfWord = (sentence, searchWord) => {
    const idx = sentence.split(' ').findIndex((word) => word.startsWith(searchWord));
    return idx === -1 ? idx : idx + 1;
};