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
    const { val, next } = head, 
          arr = [val], 
          arr1 = [val];
    
    let node = next;
    
    while (node) {
        const { val, next } = node;
        
        arr.push(val);
        arr1.unshift(val);
        
        node = next;
    }
    
    return arr.join() === arr1.join();
};