function sumSubarrayMins(arr: Array<number>): number {
    let sum = 0;

    for (let start = 0, n = arr.length; start < n; start++) {
        let currentMin = Infinity;
        
        for (let i = start; i < n; i++) {
            if (arr[i] < currentMin)
                currentMin = arr[i];
            sum += currentMin;
        }
    }

    return sum % 1000000007;
}