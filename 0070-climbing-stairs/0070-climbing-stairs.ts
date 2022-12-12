function climbStairs(n: number): number {
    const arr = [1, 1];

    for (let i = 0; i < n + 1; i++)
        arr.push(arr.at(-1) + arr.at(-2));

    return arr[n];
}