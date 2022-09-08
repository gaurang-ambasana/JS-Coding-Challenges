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
var reverseList = function(head) {
    if (head === null) return null;
    
    let { val, next: node } = head;
    let list = new ListNode(val, null);
    
    while (node) {
        const { val, next } = node;
        list = new ListNode(val, list);
        node = next;
    }
    
    return list;
}