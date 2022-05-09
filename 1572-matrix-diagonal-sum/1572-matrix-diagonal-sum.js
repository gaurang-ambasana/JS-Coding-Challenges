/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let primaryDia = 0;
    let secondaryDia = 0;
    
    for (let i = 0; i < mat.length; i++) primaryDia += mat[i][i];
    for (let i = 0, j = mat.length - 1; i < mat.length; i++, j--) secondaryDia += mat[i][j];
    
    if (mat.length % 2 !== 0) return primaryDia + secondaryDia - mat[Math.floor(mat.length / 2)][Math.floor(mat.length / 2)];
    
    return primaryDia + secondaryDia;
};