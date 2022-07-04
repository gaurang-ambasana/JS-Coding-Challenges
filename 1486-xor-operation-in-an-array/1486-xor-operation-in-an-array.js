/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = (n, start) => {
    const arr = [start];
    
    while (arr.length !== n) 
        arr.push(start + 2 * arr.length);
    
    return arr.slice(1, n).reduce((r, e) => r ^ e, start);
};