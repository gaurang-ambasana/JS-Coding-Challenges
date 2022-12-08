function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const arr: number[] = [];

    function traverse(node: TreeNode): void {
        const { val, left, right } = node;

        if (left === null && right === null) {
            arr.push(val);
            return;
        }

        left && traverse(left);
        right && traverse(right);
    }

    traverse(root1);

    const arr1 = [...arr];
    arr.length = 0;

    traverse(root2);

    return arr.length === arr1.length && arr.every((n, i) => n === arr1[i]);
}