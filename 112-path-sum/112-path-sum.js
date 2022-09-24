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
var hasPathSum = function(root, targetSum) {
    let ans = false;
    
    const traverse = (node, path, diff) => {
        if (ans) return;
        
        const { val, left, right } = node;
        
        diff -= val;
        
        if (!diff && !left && !right) ans = true;
        else path.push(val);
        
        left && traverse(left, path, diff);
        right && traverse(right, path, diff);
    }
    
    root && traverse(root, [], targetSum);
    
    return ans;
};