function minDeletionSize(strs: string[]): number {
    let colsToBeDeleted = 0;

    for (let i = 0, n = strs.length, k = strs[0].length; i < k; i++)
        for (let j = 1; j < n; j++)
            if (strs[j].charCodeAt(i) < strs[j - 1].charCodeAt(i)) {
                colsToBeDeleted++;
                break;
            }

    return colsToBeDeleted;
}