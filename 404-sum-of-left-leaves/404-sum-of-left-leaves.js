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
function sumOfLeftLeaves(root) {
    function traverse(node, isLeft) {
        if (node) {
            const { val, left, right } = node;
            
            if (left || right)
                return traverse(left, true) + traverse(right, false);
            else return isLeft ? val : 0;
        } else return 0;
    }
    
    return traverse(root, false);
};