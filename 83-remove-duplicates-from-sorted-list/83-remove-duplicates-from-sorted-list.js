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
var deleteDuplicates = function(head) {
    let node = head;
    
    const set = new Set();
    
    while (node) {
        const { val, next } = node;
        set.add(val);
        node = next;
    }
    
    return Array.from(set).reverse().reduce((head, val) => new ListNode(val, head), null);
}