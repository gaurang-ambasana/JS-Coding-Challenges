/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
const hasAllCodes = (s, k) => {
    const set = new Set();

    for (let i = 0, n = s.length - k; i <= n; i++)
        set.add(s.substr(i, k));

    return set.size === 2 ** k;
};