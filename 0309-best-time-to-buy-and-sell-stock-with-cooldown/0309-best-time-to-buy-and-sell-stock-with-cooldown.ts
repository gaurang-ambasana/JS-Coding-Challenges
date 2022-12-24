function maxProfit(prices: number[]): number {
    let hold = -Infinity, rest = 0, sold = 0;

    for (let i = 0, n = prices.length; i < n; i++) {
        const p = prices[i];
        
        if (hold < rest - p)
            hold = rest - p;

        if (sold > rest)
            rest = sold;

        sold = hold + p;
    }

    return sold > rest ? sold : rest;
}