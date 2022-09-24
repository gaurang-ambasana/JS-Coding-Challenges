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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const ans = [];
    
    const traverse = (node, path, diff) => {
        const { val, left, right } = node;
        
        if (diff === val && !left && !right) {
            ans.push([...path, val]);
            return;
        }
        
        left && traverse(left, [...path, val], diff - val);
        right && traverse(right, [...path, val], diff - val);
    }
    
    root && traverse(root, [], targetSum);
    
    return ans;
};