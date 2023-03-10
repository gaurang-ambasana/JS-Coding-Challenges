class Solution {
    arr: Array<number>;

    constructor(head: ListNode | null) {
        let { val, next: node } = head;
        this.arr = [val];

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