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
function inorderTraversal(root) {
    if (root === null) return [];
    
    const ans = [];
    
    function traverse(node) {
        const { left, val, right } = node;
        
        left && traverse(left);
        
        ans.push(val);
        
        right && traverse(right);
    }
    
    traverse(root);
    
    return ans;
}