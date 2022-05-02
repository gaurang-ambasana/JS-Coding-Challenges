/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const checkAlmostEquivalent = (word1, word2) => {
    const freqOfWord1 = getFreqOfWord(word1);
    const freqOfWord2 = getFreqOfWord(word2);
    
    return Object.entries(freqOfWord1).every(([key, value]) => {
        if (key in freqOfWord2) {
            const diff = Math.abs(freqOfWord2[key] - value);
            return diff < 4;
        } else return value < 4;
    }) && Object.entries(freqOfWord2).every(([key, value]) => {
        if (key in freqOfWord1) {
            const diff = Math.abs(freqOfWord1[key] - value);
            return diff < 4;
        } else return value < 4;
    });
};

const getFreqOfWord = (word) => word.split('').reduce((a, char) => (a[char] = a[char] ? ++a[char] : 1, a), {});