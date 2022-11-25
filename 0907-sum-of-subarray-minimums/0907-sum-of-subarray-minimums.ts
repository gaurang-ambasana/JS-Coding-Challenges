function sumSubarrayMins(arr: number[]): number {
    let sum = 0;

    for (let start = 0, n = arr.length; start < n; start++) {
        let currentMin: number = arr[start];
        sum += currentMin;
        
        for (let i = start + 1; i < n; i++) {
            currentMin = Math.min(arr[i], currentMin);
            sum += currentMin;
        }
    }

    return sum % 1000000007;
}