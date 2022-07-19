class MyStack {
    constructor() {
        this.s = [];
    }
    
    push(n) {
        this.s.unshift(n);
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