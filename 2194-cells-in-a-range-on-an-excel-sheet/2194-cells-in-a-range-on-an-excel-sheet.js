/**
 * @param {string} s
 * @return {string[]}
 */
const cellsInRange = s => {
    const cells = [];
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    for (let i = alpha.indexOf(s[0]), n = alpha.indexOf(s[3]) + 1; i < n; i++)
        for (let j = s[1], k = parseInt(s[4]) + 1; j < k; j++)
            cells.push(`${alpha[i]}${j}`);
    
    return cells;
};