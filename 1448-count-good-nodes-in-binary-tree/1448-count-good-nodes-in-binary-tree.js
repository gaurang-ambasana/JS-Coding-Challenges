/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const goodNodes = function(root) {
    let count = 0;
    
    function check(node, max) {
        const { val, left, right } = node;
            
        if (val >= max) {
            max = val;
            count++;
        }
            
        left && check(left, max);
        right && check(right, max);
    }
    
    check(root, root.val);
    
    return count;
};