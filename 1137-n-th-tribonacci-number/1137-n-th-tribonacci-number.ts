function tribonacci(n: number): number {
    const series = [0, 1, 1];

    if (n < 3)
        return series[n];

    for (let i = 3; i <= n; i++)
        series.push(series[i - 3] + series[i - 2] + series[i - 1]);

    return series.pop();
}