type F = (...args: any[]) => void

function throttle(fn: F, t: number): F {
    let callable = true;
    let lastArgs = null;

    const helper = (): void => {
        if (callable && lastArgs) {
            fn (...lastArgs);
            
            callable = false;
            lastArgs = null;

            setTimeout(() => {
                callable = true;
                helper();
            }, t);
        }
    }
    
    return (...args) => {
        lastArgs = args;
        helper();
    }
}