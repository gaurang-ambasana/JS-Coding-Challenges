class LUPrefix {
    server: Array<number>;
    current: number;

    constructor(n: number) {
        this.server = Array(n).fill(0);
        this.current = 0;
    }

    upload(video: number): void {
        ++this.server[video - 1];
    }

    longest(): number {
        const n = this.server.length;

        while (this.current < n && this.server[this.current] !== 0) {
            ++this.current;
        }

        return this.current;
    }
}