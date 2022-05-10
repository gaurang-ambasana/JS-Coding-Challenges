/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const res = [];
    
    for (let i = 0; i <= rowIndex; i++) {
        const temp = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || i == j) temp.push(1);
            else temp.push(res[i - 1][j - 1] + res[i - 1][j]);
        }
        res.push(temp);
    }
    return res[rowIndex];
};