/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = (licensePlate, words) => {
    const chars = licensePlate.replaceAll(/[0-9]/g, '').replaceAll(/\s/g, '').toLowerCase().split(``);
    const freq = chars.reduce((c, w) => (c[w] = (c[w] ?? 0) + 1, c), {});
    const freqOfWords = words.map(x => x.split(``).reduce((c, w) => (c[w] = (c[w] ?? 0) + 1, c), {}));
    
    return words.reduce((ans, w, i) => {
        const counter = freqOfWords[i];
        
        if (chars.every(c => counter[c] >= freq[c]))
            if (ans.length > w.length) ans = w;
            else if (!ans) ans = w;
        
        return ans;
    }, ``);
};