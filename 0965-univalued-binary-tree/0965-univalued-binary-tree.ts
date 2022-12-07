function isUnivalTree(root: TreeNode | null): boolean {
    const { val, left, right } = root;
    const set = new Set<number>();
    set.add(val);

    function traverse(node: TreeNode| null): boolean {
        if (!node) return true;
        
        const { val, left, right } = node;

        if (!set.has(val))
            return false;

        return traverse(left) && traverse(right);
    }

    return traverse(left) && traverse(right);
}