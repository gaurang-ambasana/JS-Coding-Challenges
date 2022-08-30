/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let n1 = [l1.val];    
    let n2 = [l2.val];
    
    let node1 = l1.next;
    let node2 = l2.next;
    
    while (node1) {
        n1.unshift(node1.val);
        node1 = node1.next;
    }
    
    while (node2) {
        n2.unshift(node2.val);
        node2 = node2.next;
    }
    
    const res = (BigInt(n1.join(``)) + BigInt(n2.join(``))).toString().split(``);
    
    return res.slice(1).reduce((head, val) => new ListNode(val, head), new ListNode(res[0]));
};