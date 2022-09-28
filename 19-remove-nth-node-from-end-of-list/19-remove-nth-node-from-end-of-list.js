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
const removeNthFromEnd = function(head, n) {
    let node = head, arr = [];
    
    while (node) {
        const { val, next } = node;
        arr.push(val);
        node = next;
    }
    
    arr.splice(-n, 1);
    
    if (arr.length === 0) return null;
    
    let tmp = new ListNode(arr[0], null);
    
    const list = tmp;
    
    for (let i = 1, n = arr.length; i < n; i++) {
        tmp.next = new ListNode(arr[i], null);
        tmp = tmp.next;
    }
    
    return list;
};