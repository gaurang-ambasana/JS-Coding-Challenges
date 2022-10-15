function increasingBST(root: TreeNode | null): TreeNode | null {
    const arr: Array<number> = [];
    
    function traverse(node: TreeNode) {
        const { left, val, right } : TreeNode | null = node;
        
        arr.push(val);
        left && traverse(left);
        right && traverse(right);
    }
    
    root && traverse(root);
    
    arr.sort((a, b) => a - b);
    
    const tree: TreeNode = new TreeNode(arr[0]);
    
    let tmp: TreeNode = tree;
    
    for (let i = 1, n = arr.length; i < n; i++) {
        tmp.right = new TreeNode(arr[i]);
        tmp = tmp.right;
    }
    
    return tree;
}