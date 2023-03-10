class Solution {
    arr: Array<number>;

    constructor(head: ListNode | null) {
        this.arr = [];
        let node = head;

        while (node) {
            const { val, next } = node;
            this.arr.push(val);
            node = next;
        }
    }

    getRandom(): number {
        return this.arr[Math.floor(Math.random() * this.arr.length)];
    }
}