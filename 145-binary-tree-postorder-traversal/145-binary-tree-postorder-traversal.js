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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if (root === null) return [];
    
    const ans = [];
    
    function traverse(node) {
        const { val, left, right } = node;
        
        left && traverse(left);
        right && traverse(right);
        ans.push(val);
    }
    
    traverse(root);
    
    return ans;
};