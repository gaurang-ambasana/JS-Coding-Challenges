function pairSum(head: ListNode | null): number {
    let { val, next: node } = head;

    const arr = [val];

    while (node) {
        const { val, next } = node;
        arr.push(val);
        node = next;
    }

    let maxSum = 0;

    for (let i = 0, n = arr.length; i < n; i++) {
        const sum = arr[i] + arr[n - 1 - i];
        
        if (sum > maxSum)
            maxSum = sum;
    }

    return maxSum;
}