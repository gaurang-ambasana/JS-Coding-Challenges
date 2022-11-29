class RandomizedSet {
    set: Set<number>;
    
    constructor() {
        this.set = new Set();
    }

    insert(val: number): boolean {
        return this.set.size !== this.set.add(val).size;
    }

    remove(val: number): boolean {
        return this.set.delete(val);
    }

    getRandom(): number {
        return Array.from(this.set)[Math.floor(Math.random() * this.set.size)];
    }
}