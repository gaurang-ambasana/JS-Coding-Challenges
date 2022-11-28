function findWinners(matches: number[][]): number[][] {
    const losers: { [index: number]: number } = {}, winners = new Set<number>([].concat(...matches)), oneTimeLosers = new Set<number>();

    for (let i = 0, n = matches.length; i < n; i++) {
        const loser = matches[i][1];
        winners.delete(loser);
        
        if (loser in losers) { 
            losers[loser]++;
            oneTimeLosers.has(loser) && oneTimeLosers.delete(loser);
        } else { 
            losers[loser] = 1;
            oneTimeLosers.add(loser);
        }
    }

    return [Array.from(winners).sort((a, b) => a - b), Array.from(oneTimeLosers).sort((a, b) => a - b)];
}