/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    const set = new Set();
    
    while (head) {
        const node = head;
        
        if (set.has(node))
            return head;
        set.add(node);
        
        head = head.next;
    }
    
    return null;
};