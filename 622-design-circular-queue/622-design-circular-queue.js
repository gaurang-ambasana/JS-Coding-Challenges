/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.pointer = k;
    this.max = k;
    this.q = [];
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.pointer > 0) {
        this.pointer--;
        this.q.push(value);
        return true;
    } else return false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.q.length === 0)
        return false;
    this.pointer++;
    this.q.shift();
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.q.length ? this.q[0] : -1;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    return this.q.length ? this.q.at(-1) : -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.q.length === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.q.length === this.max;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */