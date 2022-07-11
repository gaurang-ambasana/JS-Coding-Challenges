/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    const range = [];
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    for (let i = alpha.indexOf(s[0]), n = alpha.indexOf(s[3]) + 1; i < n; i++)
        for (let j = s[1], k = parseInt(s[4]) + 1; j < k; j++)
            range.push(`${alpha[i]}${j}`);
    
    return range;
};