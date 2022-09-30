/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    let l1 = head;
    let l2 = head;
    
    if (head.next === null)
        return null;
    
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
};