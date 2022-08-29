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
    let l1 = head;
    let l2 = head;
    
    while (l2 !== null && l2.next !== null)
        [l1, l2] = [l1.next, l2.next.next];
    
    return l1;
};