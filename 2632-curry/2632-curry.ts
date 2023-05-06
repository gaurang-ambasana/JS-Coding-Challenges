function curry(fn: Function): Function {
    return function curried(...args: any) {
        if (fn.length === args.length) return fn(...args);
        else return (...newArgs: any) => curried(...args, ...newArgs);
    }
}