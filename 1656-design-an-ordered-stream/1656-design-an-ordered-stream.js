/**
 * @param {number} n
 */
class OrderedStream {
    constructor (n) {
        this.pointer = 1;
        this.os = {};
    }

    insert (idKey, value) {
        this.os[idKey] = value;
    
        const arr = [];
    
        while (this.pointer in this.os) {
            arr.push(this.os[this.pointer]);
            this.pointer++;
        }
    
        return arr;
    }
}