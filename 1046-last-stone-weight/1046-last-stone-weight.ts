function lastStoneWeight(stones: number[]): number {
    stones.sort((a, b) => a - b);

    while (stones.length > 1) {
        const x = stones.pop();
        const y = stones.pop();

        if (x !== y) {
            stones.push(x > y ? x - y : y - x);
            stones.sort((a, b) => a - b);
        }
    }

    return stones[0] ?? 0;
}