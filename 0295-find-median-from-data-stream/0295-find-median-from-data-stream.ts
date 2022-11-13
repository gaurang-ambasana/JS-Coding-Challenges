class MedianFinder {
    arr: Array<number>;
    len: number;

    constructor() {
        this.arr = [];
        this.len = 0;
    }

    addNum(num: number): void {
        if (this.len === 0 || this.arr[this.len - 1] <= num)
            this.arr.push(num);
        else this.arr.splice(this.arr.findIndex(n => n > num), 0, num);

        this.len++;
    }

    findMedian(): number {
        const mid = Math.floor(this.len / 2);
        
        if (this.len % 2)
            return this.arr[mid];
        else return (this.arr[mid - 1] + this.arr[mid]) / 2;
    }
}