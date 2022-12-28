function maximumBags(capacity: number[], rocks: number[], additionalRocks: number): number {
    const q = new MinPriorityQueue();
    let fullBags = 0

    for (let i = 0, n = rocks.length; i < n; i++) {
        const need = capacity[i] - rocks[i];
        need ? q.enqueue(need) : fullBags++;
    }

    while (additionalRocks > 0 && q.size() > 0) {
        const { element: last } = q.dequeue();

        if (last <= additionalRocks) {
            additionalRocks -= last;
            fullBags++;
        } else return fullBags;
    }

    return fullBags;
}