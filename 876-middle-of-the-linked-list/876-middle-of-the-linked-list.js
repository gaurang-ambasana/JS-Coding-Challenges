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
var middleNode = function(head) {
    let l1 = head, l2 = head;
    
    while (l2 && l2.next) {
        l1 = l1.next;
        l2 = l2.next.next;
    }
    
    return l1;
};