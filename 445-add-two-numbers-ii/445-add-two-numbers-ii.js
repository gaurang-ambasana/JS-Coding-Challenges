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
    let { val: n1, next: node1 } = l1;
    let { val: n2, next: node2 } = l2;
    
    while (node1) {
        const { val, next } = node1;
        n1 += val.toString();
        node1 = next;
    }
    
    while (node2) {
        const { val, next } = node2;
        n2 += val.toString();
        node2 = next;
    }
    
    const ans = (BigInt(n1) + BigInt(n2)).toString().split(``).reverse();
    
    return ans.slice(1).reduce((head, val) => new ListNode(val, head), new ListNode(ans[0]));
};