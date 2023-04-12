function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
    const ans = [];

    for (let i = 0, n = arr.length; i < n; i++)
        if (fn(arr[i], i))
            ans.push(arr[i]);

    return ans;
}