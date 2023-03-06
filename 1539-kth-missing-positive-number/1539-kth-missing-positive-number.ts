function findKthPositive(arr: number[], k: number): number {
    let num = 1;

    for (let i = 0; k > 0; num++)
        arr[i] === num ? ++i : --k;

    return num - 1;
}