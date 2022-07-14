/**
 * @param {number} n
 */
class OrderedStream {
    constructor (n) {
        this.pointer = 1;
        this.os = {};
    }

    /** 
    * @param {number} idKey 
    * @param {string} value
    * @return {string[]}
    */
    insert (idKey, value) {
        this.os[idKey] = value;
    
        const arr = [];
    
        while (this.pointer in this.os) {
            arr.push(this.os[this.pointer]);
            ++this.pointer;
        }
    
        return arr;
    }
};