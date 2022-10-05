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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    if (depth === 1)
        return new TreeNode(val, root);
    
    let arr = [root], currentDepth = 1, x = depth - 1;
    
    while (currentDepth < x) {
        const tmp = [];
        
        while (arr.length > 0) {
            const { left, right } = arr.pop();
            left && tmp.push(left);
            right && tmp.push(right);
        }
        
        arr = tmp;
        currentDepth++;
    }
    
    while (arr.length > 0) {
        const node = arr.pop();
        const { left: tmpLeft, right: tmpRight } = node;
        node.left = new TreeNode(val, tmpLeft);
        node.right = new TreeNode(val, null, tmpRight);
    }
    
    return root;
};