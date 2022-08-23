/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = head => {
    const arr = [head.val];
    
    let node = head.next;
    
    while (node) {
        arr.push(node.val);
        node = node.next;
    }
    
    return arr.join() === arr.reverse().join();
}