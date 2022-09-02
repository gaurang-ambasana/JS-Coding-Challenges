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
var maxDepth = function(root) {
    if (!root) return 0;
    
    let count = 0;
    
    const queue = [root], tmp = [];
    
    while (queue.length) {
        const { left, right } = queue.shift();
        
        left && tmp.push(left);
        right && tmp.push(right);
        
        if (queue.length === 0) {
            count++;
            queue.push(...tmp);
            tmp.length = 0;
        }
    }
    
    return count;
};