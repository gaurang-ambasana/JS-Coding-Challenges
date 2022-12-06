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

function oddEvenList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;

    let { val, next: node } = head;

    const arr: Array<number> = [val];

    while (node) {
        const { val, next } = node;
        arr.push(val);
        node = next;
    }

    const list = new ListNode(val), list1 = new ListNode(arr[1]);
    let tmp = list, tmp1 = list1;

    for (let i = 2, n = arr.length; i < n; i++) {
        if (i % 2) {
            tmp1.next = new ListNode(arr[i]);
            tmp1 = tmp1.next;
        } else {
            tmp.next = new ListNode(arr[i]);
            tmp = tmp.next;
        }
    }

    list1 && (tmp.next = list1);

    return list;
}