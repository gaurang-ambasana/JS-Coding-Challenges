/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) return [];
    
    const { val, children } = root;
    
    const queue = [children], ans = [[val]], child = [], tmp = [];
    
    while (queue.length > 0) {
        const arr = queue.shift();
        
        for (let i = 0, n = arr.length; i < n; i++) {
            const { val, children } = arr[i];
            tmp.push(val);
            child.push(children);
        }
        
        if (queue.length === 0) {
            ans.push([...tmp]);
            tmp.length = 0;
            queue.push(...child);
            child.length = 0;
        }
    }
    
    return ans.filter(({ length }) => length);
};