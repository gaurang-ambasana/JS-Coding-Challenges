const isValidSudoku = (board: string[][]): boolean => {
    for (let i = 0; i < 9; i++) {
        const set = new Set<string>();
        for (let j = 0; j < 9; j++) {
            const n = board[i][j];   
            if (n !== `.`)
                if (set.has(n))
                    return false;
                set.add(n);
        }
    }

    for (let i = 0; i < 9; i++) {
        const set = new Set<string>();
        for (let j = 0; j < 9; j++) {
            const n = board[j][i];
            if (n !== `.`)
                if (set.has(n))
                    return false;
                set.add(n);
        }
    }
    
    const threeCrossThree: string[][][] = [];

    for (let i = 0; i < 9; i++)
        for (let j = 0; j < 3; j++)
            threeCrossThree[j] ? threeCrossThree[j].push(board[i].splice(0, 3)) : threeCrossThree[j] = [board[i].splice(0, 3)];

    for (let i = 0; i < 3; i++) {
        while (threeCrossThree[i].length !== 0) {
            const group: Array<string> = [].concat(...threeCrossThree[i].splice(0, 3)).filter(d => d !== `.`);
            if (new Set<string>(group).size !== group.length)
                return false;
        }
    }

    return true;
}