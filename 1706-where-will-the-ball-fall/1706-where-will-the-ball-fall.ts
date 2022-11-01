function findBall(grid: number[][]): number[] {
    const res: Array<number> = Array(grid[0].length);
    
    for (let col = 0, n = grid[0].length; col < n; col++) {
        let currentCol = col;
        
        for (let row = 0, m = grid.length; row < m; row++) {
            const nextCol = currentCol + grid[row][currentCol];
            
            if (nextCol < 0 || 
                nextCol > n - 1 || 
                grid[row][currentCol] !== grid[row][nextCol]) {
                res[col] = -1;
                break;
            }
            
            res[col] = nextCol;
            currentCol = nextCol;
        }
    }
    
    return res;
}