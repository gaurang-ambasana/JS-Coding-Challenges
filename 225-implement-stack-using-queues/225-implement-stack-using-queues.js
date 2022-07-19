class MyStack {
    constructor() {
        this.s = [];
    }
    
    push(x) {
        this.s.unshift(x);
    }
    
    pop() {
        return this.s.shift();
    }
    
    top() {
        return this.s[0];
    }
    
    empty() {
        return this.s.length === 0;
    }
}