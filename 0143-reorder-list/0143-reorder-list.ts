/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    const arr: Array<number> = [];

    let node: ListNode | null = head.next, i: boolean = true;

    while (node) {
        const { val, next } = node;
        arr.push(val);
        node = next;
    }

    node = head.next;

    while (node) {
        const { next } : ListNode = node;
        
        if (i) node.val = arr.pop();
        else node.val = arr.shift();
        
        i = !i;
        node = next;
    }
};