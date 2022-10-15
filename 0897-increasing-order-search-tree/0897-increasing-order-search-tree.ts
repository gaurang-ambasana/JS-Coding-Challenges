/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function increasingBST(root: TreeNode | null): TreeNode | null {
    const arr: Array<number> = [];
    
    function traverse(node: TreeNode) {
        const { left, right, val } : TreeNode | null = node;
        
        arr.push(val);
        left && traverse(left);
        right && traverse(right);
    }
    
    root && traverse(root);
    
    arr.sort((a, b) => a - b);
    
    const tree: TreeNode = new TreeNode(arr[0]);
    
    let tmp: TreeNode = tree;
    
    for (let i: number = 1, n: number = arr.length; i < n; i++) {
        tmp.right = new TreeNode(arr[i]);
        tmp = tmp.right;
    }
    
    return tree;
}