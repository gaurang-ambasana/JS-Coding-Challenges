/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
const hasAllCodes = (s, k) => {
    if (k === 0) return true;
    
    if (s.length < k) return false;
    
    const n = Math.pow(2, k);
    const set = new Set();

    for (let i = 0, n = s.length - k; i <= n; i++)
        set.add(s.substr(i, k));

    return set.size === n;
};