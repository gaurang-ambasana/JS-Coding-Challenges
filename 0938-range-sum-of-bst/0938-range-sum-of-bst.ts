function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    let sum = 0;

    function traverse(node: TreeNode): void {
        const { val, left, right } = node;

        if (val >= low && val <= high) {
            sum += val;
            left && traverse(left);
            right && traverse(right);
        }
        else if (val < low) right && traverse(right)
        else left && traverse(left)

    }

    root && traverse(root);

    return sum;
}