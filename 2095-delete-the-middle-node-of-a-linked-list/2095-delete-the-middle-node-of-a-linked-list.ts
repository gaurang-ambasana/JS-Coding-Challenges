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

function deleteMiddle(head: ListNode | null): ListNode | null {
    if (!head.next)
        return null;
    
    let l1: ListNode = head, l2: ListNode = head;
    
    while (l2 && l2.next) {
        l1 = l1.next;
        l2 = l2.next.next;
    }
    
    if (l1.next) {
        l1.val = l1.next.val;
        l1.next = l1.next.next;
        return head;
    } else {
        head.next = null;
        return head;
    }
}