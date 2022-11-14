function removeStones(stones: number[][]): number {
	const visited: Set<string> = new Set();
	let toBeRemoved: number = 0;

	const traverse = (row: number, col: number): void => {
		const key = `${row},${col}`;

		if (visited.has(key))
            return;

		visited.add(key);
		
        for (let i = 0, n = stones.length; i < n; i++) {
            const [x, y] = stones[i];

			if (row === x || col === y)
                traverse(x, y);
        }
	};

	for (let i = 0, n = stones.length; i < n; i++) {
		const [x, y] = stones[i];
        const key = `${x},${y}`;

		if (visited.has(key))
            continue;

		traverse(x, y);
		toBeRemoved++;
	}

	return stones.length - toBeRemoved;
}