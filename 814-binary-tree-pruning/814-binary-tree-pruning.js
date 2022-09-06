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
 * @return {TreeNode}
 */
function pruneTree(root) {
    if (!root) return null;

    if (!pruneTree(root.left))
        root.left = null;
    
    if (!pruneTree(root.right))
        root.right = null;
    
    if (root.val || root.left || root.right)
        return root;
    
    return null;
}