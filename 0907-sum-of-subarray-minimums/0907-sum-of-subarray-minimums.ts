function sumSubarrayMins(arr: number[]): number {
    let sum = 0;

    for (let start = 0, n = arr.length; start < n; start++) {
        let currentMin = Number.MAX_SAFE_INTEGER;
        
        for (let i = start; i < n; i++)
            sum += (currentMin = Math.min(arr[i], currentMin));
    }

    return sum % 1000000007;
}