class BrowserHistory {
    constructor(homepage) {
        this.current = 0;
        this.list = [homepage];
    }

    visit(url) {
        if (this.current === this.list.length) {
            this.list.push(url);
            this.current++;
        } else this.list.splice(++this.current, this.list.length - this.current, url);
    }

    back(steps) {
        this.current = Math.max(0, this.current - steps);
        return this.list[this.current];
    }

    forward(steps) {
        this.current = Math.min(this.list.length - 1, this.current + steps);
        return this.list[this.current];
    }
}