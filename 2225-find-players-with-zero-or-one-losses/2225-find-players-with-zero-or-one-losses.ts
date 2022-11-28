function findWinners(matches: number[][]): number[][] {
    const losers: { [index: number]: number } = {}, winners = new Set<number>([].concat(...matches));

    for (let i = 0, n = matches.length; i < n; i++) {
        const loser = matches[i][1];
        winners.delete(loser);
        
        if (loser in losers) losers[loser]++;
        else losers[loser] = 1;
    }
    
    const zeroLose = Array.from(winners).sort((a, b) => a - b);
    const oneLose = Object.keys(losers).map(Number).filter(l => losers[l] == 1).sort((a, b) => a - b);

    return [zeroLose, oneLose];
}