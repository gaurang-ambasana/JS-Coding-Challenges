class MyStack {
    constructor() {
        this.s = [];
    }
    
    push(val) {
        this.s.unshift(val);
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