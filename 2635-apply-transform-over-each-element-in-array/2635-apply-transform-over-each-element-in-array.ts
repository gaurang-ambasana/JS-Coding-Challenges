function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const ans = [];

    for (let i = 0, n = arr.length; i < n; i++)
        ans.push(fn(arr[i], i));

    return ans;
}