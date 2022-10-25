function findErrorNums(nums: number[]): number[] {
    const n: number = nums.length;
    const duplicateNum: number = parseInt(Object.entries(nums.reduce((c, n) => (c[n] = (c[n] ?? 0) + 1, c), {})).find(([n, f]) => f === 2)[0]);
    const sum: number = ((n * (n + 1)) / 2);
    const missing: number = sum - <number>Array.from(new Set(nums)).reduce((sum, n) => sum + n, 0);
    
    return [duplicateNum, missing];
}