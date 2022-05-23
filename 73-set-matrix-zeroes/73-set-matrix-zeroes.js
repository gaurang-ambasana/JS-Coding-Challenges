/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = matrix => {
    const makeRowZero = row => {
        for (let i = 0; i < matrix[row].length; i++)
            if (matrix[row][i] !== 0 && matrix[row][i] !== 's')
                matrix[row][i] = 's';
    };
    
    const makeColZero = col => {
        for (let i = 0; i < matrix.length; i++)
            if (matrix[i][col] !== 0 && matrix[i][col] !== 's')
                matrix[i][col] = 's';
    };
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                makeRowZero(i);
                makeColZero(j);
            }
        }
    }
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++)
            if (matrix[i][j] === 's')
                matrix[i][j] = 0;
    }
};