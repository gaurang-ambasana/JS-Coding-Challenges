/**
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
const queryString = (s, n) => {
    for (let i = 1; i <= n; i++)
        if (!s.includes(i.toString(2))) return false;
    
    return true;
};