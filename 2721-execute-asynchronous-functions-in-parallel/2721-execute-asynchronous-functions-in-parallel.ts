async function promiseAll<T>(functions: (() => Promise<T>)[]): Promise<T[]> {
    return new Promise((resolve, reject) => {
        const result = [];
        let resolveCounter = 0;
        
        for (let i = 0, n = functions.length; i < n; i++) {
            functions[i]().then(res => {
                resolveCounter++;
                result[i] = res;
                resolveCounter === n && resolve(result);
            }).catch(err => reject(err));
        }
    });
}