function equalPairs(grid: number[][]): number {
    const cols = grid.reduce((ans: any[], row) => {
        for (let i = 0, n = row.length; i < n; i++)
            ans[i] += `,${row[i]}`;
        return ans;
    }, Array(grid[0].length).fill([]));

    return grid.map(row => row.join()).reduce((ans, row) => ans + cols.filter(c => c.slice(1) === row).length, 0);
}