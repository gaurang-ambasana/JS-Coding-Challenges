class MedianFinder {
    arr: Array<number>;

    constructor() {
        this.arr = [];
    }

    addNum(num: number): void {
        const len = this.arr.length;
        
        if (len === 0 || this.arr[len - 1] <= num)
            this.arr.push(num);
        else this.arr.splice(this.arr.findIndex(n => n > num), 0, num);
    }

    findMedian(): number {
        const len = this.arr.length;
        const mid = Math.floor(len / 2);
        
        if (len % 2)
            return this.arr[mid];
        else return (this.arr[mid - 1] + this.arr[mid]) / 2;
    }
}