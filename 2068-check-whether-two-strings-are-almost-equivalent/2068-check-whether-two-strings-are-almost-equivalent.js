/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const checkAlmostEquivalent = (word1, word2) => {
    const getFreqOfWord = (word) => word.split('').reduce((a, char) => (a[char] = a[char] ? ++a[char] : 1, a), {});
    const freqOfWord1 = getFreqOfWord(word1);
    const freqOfWord2 = getFreqOfWord(word2);
    
    return Object.entries(freqOfWord1).every(([key, value]) => 
        key in freqOfWord2 ? 
            Math.abs(freqOfWord2[key] - value) < 4 : 
            value < 4
    ) && Object.entries(freqOfWord2).every(([key, value]) => 
        key in freqOfWord1 ?
            Math.abs(freqOfWord1[key] - value) < 4 : 
            value < 4
    );
};