function maxPathSum(root: TreeNode | null): number {
    let max = -Infinity;

    function traverse(node: TreeNode): number {
        const { left, val, right } = node;

        const leftSum = left ? Math.max(traverse(left), 0) : 0;
        const rightSum = right ? Math.max(traverse(right), 0) : 0;

        const sum = leftSum + rightSum + val;

        if (max < sum)
            max = sum;

        return Math.max(leftSum + val, rightSum + val);
    }

    root && traverse(root);

    return max;
}