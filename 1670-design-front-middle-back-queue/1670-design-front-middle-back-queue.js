
class FrontMiddleBackQueue {
    constructor() {
        this.q = [];
    }
    
    pushFront(val) {
        this.q.unshift(val);
    }

    pushMiddle(val) {
        this.q.splice(Math.floor(this.q.length / 2), 0, val);
    }
    
    pushBack(val) {
        this.q.push(val);
    }
    
    popFront() {
        return this.q.shift() ?? -1;
    }
        
    popMiddle() {
        return (this.q.length % 2) ? this.q.splice(Math.floor(this.q.length / 2), 1)[0] : this.q.splice(Math.floor((this.q.length - 1) / 2), 1)[0] ?? -1;
    }
        
    popBack() {
        return this.q.pop() ?? -1;
    }
}