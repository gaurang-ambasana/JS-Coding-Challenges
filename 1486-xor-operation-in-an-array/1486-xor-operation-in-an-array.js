/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = (n, start) => {
    const arr = [];
    let i = 1;
    
    while (arr.length !== n - 1) 
        arr.push(start + 2 * i++);
    
    return arr.reduce((r, e) => r ^ e, start);
};