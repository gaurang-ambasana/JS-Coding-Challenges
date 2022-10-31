function isToeplitzMatrix(matrix: number[][]): boolean {
    for (let i = 0, n = matrix.length; i < n; i++)
        for (let j = 0, m = matrix[i].length; j < m; j++)
            if (i > 0 && j > 0 && matrix[i - 1][j - 1] !== matrix[i][j])
                return false;
    
    return true;
}