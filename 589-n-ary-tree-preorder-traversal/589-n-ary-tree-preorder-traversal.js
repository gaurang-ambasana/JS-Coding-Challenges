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
var preorder = function(root) {
    const arr = [];
    
    function traverse(node) {
        if (node === null) return;
        const { val, children } = node;
        arr.push(val);
        
        for (let i = 0, n = children.length; i < n; i++)
            traverse(children[i]);
    }
    
    traverse(root);
    
    return arr;
};