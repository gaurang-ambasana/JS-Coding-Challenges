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
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = function(root, targetSum) {
    let ans = false;
    
    const traverse = (node, path, diff) => {
        if (ans) return;
        
        const { val, left, right } = node;
        
        if (diff === val && left === null && right === null) {
            ans = true;
            return;
        }
        
        left && traverse(left, [...path, val], diff - val);
        right && traverse(right, [...path, val], diff - val);
    };
    
    root && traverse(root, [], targetSum);
    
    return ans;
};