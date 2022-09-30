/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, value) {
    while (head && head.val === value)
        head = head.next;
    
    let current = head;
    
    while (current && current.next) {
        if (current.next.val === value)
            current.next = current.next.next;
        else current = current.next;
    }
    
    return head;
};