class TimeLimitedCache {
    cache: Map<number, { value: number, timer: ReturnType<typeof setTimeout> }>; 
    
    constructor() {
        this.cache = new Map();
    }

    set(key: number, value: number, duration: number): boolean {
        if (this.cache.has(key)) {
            const { timer } = this.cache.get(key);
            clearTimeout(timer);
            
            this.cache.set(key, {
                value, 
                timer: setTimeout(() => {
                    this.cache.delete(key);
                }, duration),
            });

            return true;
        }

        this.cache.set(key, {
            value, 
            timer: setTimeout(() => {
                this.cache.delete(key);
            }, duration),
        });

        return false;
    }

    get(key: number): number {
        return this.cache.get(key)?.value ?? -1;
    }

	count(): number {
        return this.cache.size;
    }
}