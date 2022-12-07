function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    
    const { val: valP, left: leftP, right: rightP } = p;
    const { val: valQ, left: leftQ, right: rightQ } = q;
    
    if (valP !== valQ) return false;
    
    return isSameTree(leftP, leftQ) && isSameTree(rightP, rightQ);
}