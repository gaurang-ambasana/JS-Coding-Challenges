class SmallestInfiniteSet {
    q: any;
    set: Set<number>;

    constructor() {
        this.q = new MinPriorityQueue();
        this.set = new Set();

        for (let i = 1; i < 1001; i++)
            this.q.enqueue(i);
    }

    popSmallest(): number {
        const { element } = this.q.dequeue();
        this.set.add(element);
        return element;
    }

    addBack(num: number): void {
        if (this.set.has(num)) {
            this.q.enqueue(num);
            this.set.delete(num);
        }
    }
}