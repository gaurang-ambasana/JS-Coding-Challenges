class NumArray {
    constructor (nums) {
        this.arr = nums;
    }
    
    sumRange (left, right) {
        return this.arr.slice(left, right + 1).reduce((s, e) => s + e, 0);
    };
};