/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = (matrix, target) => {
    let row = 0;
    let col = matrix[row].length - 1;
    const n = matrix.length;
    
    while (row < n && col > -1)
        if (matrix[row][col] === target)
            return true;
        else if (matrix[row][col] > target)
            --col;
        else ++row;

    return false;
}