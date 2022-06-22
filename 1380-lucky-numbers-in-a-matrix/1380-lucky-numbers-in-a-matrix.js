/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    const minRow = matrix.map(row => Math.min(...row));
    return matrix[0].reduce((arr, _, i) => {
        const col = matrix.map(r => r[i]);
        const max = Math.max(...col);
        
        minRow.includes(max) && arr.push(max);
        
        return arr;
    }, []);
};