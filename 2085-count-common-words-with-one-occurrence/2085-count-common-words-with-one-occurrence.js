/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
const countWords = (words1, words2) => {
    const freqCounter1 = getFreqOfArr(words1);
    const freqCounter2 = getFreqOfArr(words2);
    
    if (Object.values(freqCounter1) > Object.values(freqCounter2))
        return Object.keys(freqCounter1).filter(key => key in freqCounter2 && freqCounter1[key] === 1 && freqCounter2[key] === 1).length;
    else return Object.keys(freqCounter2).filter(key => key in freqCounter1 && freqCounter1[key] === 1 && freqCounter2[key] === 1).length;
};

const getFreqOfArr = (arr) => arr.reduce((freq, word) => (freq[word] = (freq[word] ?? 0) + 1, freq), {});