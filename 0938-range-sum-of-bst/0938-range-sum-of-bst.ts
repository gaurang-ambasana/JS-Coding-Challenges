function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    let sum = 0;

    function traverse(node: TreeNode): void {
        const { val, left, right } = node;

        if (val >= low && val <= high)
            sum += val;

        left && traverse(left);
        right && traverse(right);
    }

    root && traverse(root);

    return sum;
}