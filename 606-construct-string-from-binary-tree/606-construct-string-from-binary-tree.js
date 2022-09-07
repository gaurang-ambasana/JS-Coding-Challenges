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
 * @return {string}
 */
function tree2str(root) {
    const { val, left, right } = root;
    
    let ans = val.toString();
    
    if (left)
        ans += `(${tree2str(left)})`;
    else if (right)
        ans += `()`;
    
    if (right)
        ans += `(${tree2str(right)})`;
    
    return ans;
}