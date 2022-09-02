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
 * @return {number[]}
 */
const averageOfLevels = function(root) {
    const res = [];
    const queue = [root];
    
    let sum = 0, count = 0, tmp = [];
    
    while (queue.length) {
        const { val, left, right } = queue.shift();
        
        sum += val;
        count += 1;
        
        left && tmp.push(left);
        right && tmp.push(right);
        
        if (queue.length === 0) {
            res.push(sum / count);
            queue.push(...tmp);
            
            count = 0;
            sum = 0;
            tmp.length = 0;
        }
    }
    
    return res;
}