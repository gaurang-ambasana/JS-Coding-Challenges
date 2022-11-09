class StockSpanner {
    spanner: Array<Array<number>>;

    constructor() {
        this.spanner = []; 
    }

    next(price: number): number {
        let ans: number = 1;
        
        while (this.spanner.length > 0 && this.spanner[this.spanner.length - 1][0] <= price) ans += this.spanner.pop()[1];
        
        this.spanner.push([price, ans]);
        return ans;
    }
}