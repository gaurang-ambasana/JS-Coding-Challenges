type F = () => Promise<any>;

const promisePool = (functions: F[], n: number): Promise<any> => {
    const helper = async (): Promise<void> => n < functions.length && functions[n++]().then(helper);

    return Promise.all(functions.slice(0, n).map(fn => fn().then(helper)));
}