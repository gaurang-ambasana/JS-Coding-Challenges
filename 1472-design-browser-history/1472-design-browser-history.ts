class BrowserHistory {
    current: number;
    list: Array<string>;
    
    constructor(homepage: string) {
        this.current = 0;
        this.list = [homepage];
    }

    visit(url: string): void {
        if (this.current === this.list.length) {
            this.list.push(url);
            this.current++;
        } else this.list.splice(++this.current, this.list.length - this.current, url);
    }

    back(steps: number): string {
        this.current = Math.max(0, this.current - steps);
        return this.list[this.current];
    }

    forward(steps: number): string {
        this.current = Math.min(this.list.length - 1, this.current + steps);
        return this.list[this.current];
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */