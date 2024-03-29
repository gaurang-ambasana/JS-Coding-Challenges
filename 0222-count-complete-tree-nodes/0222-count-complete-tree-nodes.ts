function countNodes(root: TreeNode | null): number {
    let count: number = 0;
    
    if (root !== null) {
        count += 1;
        
        const { left, right } = root;
        
        if (left || right)
            return count + countNodes(left) + countNodes(right);
    }
    
    return count;
}