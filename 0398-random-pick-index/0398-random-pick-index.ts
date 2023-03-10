class Solution {
    table: {[index: number]: Array<number>};

    constructor(nums: number[]) {
        this.table = nums.reduce((t, n, i) => {
            if (n in t)
                t[n].push(i);
            else t[n] = [i];

            return t;
        }, {});
    }

    pick(target: number): number {
        const arr = this.table[target];
        return arr[Math.floor(Math.random() * arr.length)];
    }
}