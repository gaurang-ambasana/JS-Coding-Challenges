/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
function preorder(root) {
    const arr = [];
    
    function traverse(node) {
        const { val, children } = node;
        arr.push(val);
        
        for (let i = 0, n = children.length; i < n; i++)
            children[i] && traverse(children[i]);
    }
    
    root && traverse(root);
    
    return arr;
}