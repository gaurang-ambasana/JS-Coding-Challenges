class LRUCache {
    max: number;
    cache: Map<number, number>;

    constructor(capacity: number) {
        this.max = capacity;
        this.cache = new Map();
    }

    get(key: number): number {
        const val = this.cache.get(key);

        if (val === undefined)
            return -1;
        
        this.cache.delete(key);
        this.cache.set(key, val);
        return this.cache.get(key);
    }

    put(key: number, value: number): void {
        if (this.cache.size >= this.max && !this.cache.has(key))
            this.cache.delete(this.cache.keys().next().value);

        this.cache.delete(key);
        this.cache.set(key, value);
    }
}