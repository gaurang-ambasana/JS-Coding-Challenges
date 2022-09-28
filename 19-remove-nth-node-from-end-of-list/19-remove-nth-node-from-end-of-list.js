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
const removeNthFromEnd = (head, n) => {
    const { val, next } = head;
    
    const arr = [val];
    let node = next;
    
    while (node) {
        const { val, next } = node;
        arr.push(val);
        node = node.next;
    }
    
    arr.splice(-n, 1);
    arr.reverse();
    
    return arr.reduce((head, val) => new ListNode(val, head), null);
};