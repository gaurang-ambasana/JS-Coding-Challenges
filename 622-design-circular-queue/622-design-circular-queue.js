/**
 * @param {number} k
 */
class MyCircularQueue {
    constructor(k) {
        this.pointer = k;
        this.max = k;
        this.q = [];
    };
    
    /** 
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if (this.pointer > 0) {
            this.pointer--;
            this.q.push(value);
            return true;
        } else return false;
    };
    
    
    /**
     * @return {boolean}
     */
    deQueue() {
        if (this.q.length === 0)
            return false;
        this.pointer++;
        this.q.shift();
        return true;
    };
    
    /**
     * @return {number}
     */
    Front() {
        return this.q.length ? this.q[0] : -1;
    };
    
    /**
     * @return {number}
     */
    Rear() {
        return this.q.length ? this.q.at(-1) : -1;
    };

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.q.length === 0;
    };

    /**
     * @return {boolean}
     */
    isFull() {
        return this.q.length === this.max;
    };
}