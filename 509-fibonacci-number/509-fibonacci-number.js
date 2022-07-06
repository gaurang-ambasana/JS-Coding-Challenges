/**
 * @param {number} n
 * @return {number}
 */
const fib = n => {
    const s = [0, 1];
    
    for (let i = 2; i < n + 1; i++)
        s.push(s[i - 1] + s[i - 2]);
    
    return s[n];
};