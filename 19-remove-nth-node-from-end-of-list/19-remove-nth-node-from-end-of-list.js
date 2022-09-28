/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let node = head, arr = [];
    
    while (node) {
        const { val, next } = node;
        arr.push(val);
        node = next;
    }
    
    arr.splice(-n, 1);
    
    return arr.reverse().reduce((list, val) => new ListNode(val, list), null);
};