function maxProduct(root: TreeNode | null): number {
    const sums = [];
    
    function getSum(node: TreeNode): number {
        const { val, left, right } = node;
        const sum =  val + (left ? getSum(left) : 0) + (right ? getSum(right) : 0);
        
        sums.push(sum);
        
        return sum;
    }

    const total = getSum(root);
    let max = 0;

    for (let i = 0, n = sums.length; i < n; i++) {
        const product = sums[i] * (total - sums[i]);

        if (product > max)
            max = product;
    }

    return max % 1000000007;
}