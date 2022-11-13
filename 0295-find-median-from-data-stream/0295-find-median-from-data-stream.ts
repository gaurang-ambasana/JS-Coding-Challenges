class MedianFinder {
    finder: Array<number>;

    constructor() {
        this.finder = [];
    }

    addNum(num: number): void {
        const len = this.finder.length;
        
        if (len === 0 || this.finder[len - 1] <= num)
            this.finder.push(num);
        else this.finder.splice(this.finder.findIndex(n => n > num), 0, num);
    }

    findMedian(): number {
        const len = this.finder.length;
        const mid = Math.floor(len / 2);
        
        if (len % 2)
            return this.finder[mid];
        else return (this.finder[mid - 1] + this.finder[mid]) / 2;
    }
}