function getMinimumDifference(root: TreeNode | null): number {
    let min = Infinity, prev = null;

    const traverse = (node: TreeNode): void => {
        const { left, val, right } = node;

        left && traverse(left);

        if (prev !== null) {
            const diff = Math.abs(prev - val);
            
            if (min > diff) {
                min = diff;
            }
        }

        prev = val;

        right && traverse(right);
    }

    root && traverse(root);

    return min;
}