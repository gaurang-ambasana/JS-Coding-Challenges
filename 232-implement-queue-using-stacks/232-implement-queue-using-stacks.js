class MyQueue {
    constructor() {
        this.q = [];
    }
    
    push(e) {
        this.q.push(e);
    }
    
    pop() {
        return this.q.shift();
    }
    
    peek() {
        return this.q[0];
    }
    
    empty() {
        return this.q.length === 0;
    }
}
