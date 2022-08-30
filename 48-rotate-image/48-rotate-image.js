/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = (matrix) => {
    const clone = [...matrix].reverse();
    
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = clone.reduce((arr, row) => {
            arr.push(row[i]);
            return arr;
        }, []);
    }
};