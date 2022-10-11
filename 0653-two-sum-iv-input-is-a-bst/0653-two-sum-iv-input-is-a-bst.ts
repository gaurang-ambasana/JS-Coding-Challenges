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

function findTarget(root: TreeNode | null, k: number): boolean {
    const set: Set<number> = new Set();
    
    let flag: boolean = false;
    
    function traverse(node: TreeNode): void {
        if (flag) return;
        
        const { left, val, right }: any = node;
        
        const diff: number = k - val;
        
        if (set.has(diff)) {
            flag = true;
            return;
        } else set.add(val);
        
        left && traverse(left);
        right && traverse(right);
    }

    traverse(root);

    return flag;
}