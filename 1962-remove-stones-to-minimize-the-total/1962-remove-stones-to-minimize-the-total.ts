function minStoneSum(piles: number[], k: number): number {
    const maxPriorityQ = new MaxPriorityQueue();
    let sum = 0;

    for (let i = 0, n = piles.length; i < n; i++) {
        maxPriorityQ.enqueue(piles[i]);
        sum += piles[i];
    }

    while (k--) {
        let { element: last } = maxPriorityQ.dequeue();
        sum -= last;
        last -= Math.floor(last / 2);
        sum += last;
        maxPriorityQ.enqueue(last);
    }

    return sum;
}