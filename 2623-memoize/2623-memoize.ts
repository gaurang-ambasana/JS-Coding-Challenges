type Fn = (...params: any) => any

function memoize(fn: Fn): Fn {
    const cache = new Map<string, any>();

    return (...args) => {
        const key = args.join();

        if (cache.has(key))
            return cache.get(key);

        const ans = fn(...args);
        cache.set(key, ans);

        return ans;
    }
}