/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const getFreq = (str) => str.split('').reduce((acc, char) => (acc[char] = (acc[char] ?? 0) + 1, acc), {});
                                                  
    const freqOfS = getFreq(s);
    const freqOfT = getFreq(t);
    
    return Object.keys(freqOfS).length > Object.keys(freqOfT).length ? Object.keys(freqOfS).every(key => freqOfS[key] === freqOfT[key]) : Object.keys(freqOfT).every(key => freqOfS[key] === freqOfT[key]);
};