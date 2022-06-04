/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
const rearrangeCharacters = (s, target) => {
    const freqCounter = (str) => str.split(``).reduce((c, a) => (c[a] = (c[a] ?? 0) + 1, c), {});
                                                    
    const targetFreq = freqCounter(target);
    const sFreq = freqCounter(s);
    
    const max = Object.keys(targetFreq).reduce((min, key) => Math.min(Math.floor(sFreq[key] / targetFreq[key]), min), Infinity);
    
    return isNaN(max) ? 0 : max;
};