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
const mergeNodes = head => {
    let count = 0, node = head.next;
    
    const arr = [];
    
    while (node) {
        const { val, next } = node;
        
        if (val) count += val;
        else {
            arr.unshift(count);
            count = 0;
        }
        
        node = next;
    }

    return arr.reduce((head, val) => new ListNode(val, head), null);
}