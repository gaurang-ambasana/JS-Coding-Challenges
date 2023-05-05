type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): ReturnObj {
    this.curr = init;

    this.reset = () => {
        this.curr = init;
        return init;
    }

    this.increment = () => {
        return ++this.curr;
    }

    this.decrement = () => {
        return --this.curr;
    }

    return this;
}