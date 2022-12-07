function maxAncestorDiff(root: TreeNode | null): number {
    let diff = -Infinity;

    function traverse(node: TreeNode | null, max: number, min: number): void {
        if (!node) {
            const newDiff = max - min;
            
            if (diff < newDiff)
                diff = newDiff;
            
            return;
        }

        const { val, left, right } = node;

        if (val > max)
            max = val;

        if (val < min)
            min = val;

        traverse(left, max, min);
        traverse(right, max, min);
    }

    const { val } = root;
    traverse(root, val, val);

    return diff;
}