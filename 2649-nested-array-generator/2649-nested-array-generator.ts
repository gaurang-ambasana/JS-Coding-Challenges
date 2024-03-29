type MultidimensionalArray = (MultidimensionalArray | number)[]

function* inorderTraversal(arr: MultidimensionalArray): Generator<number, void, unknown> {
    for (let i = 0, n = arr.length; i < n; i++) {
        if (Array.isArray(arr[i])) {
            yield* inorderTraversal(arr[i] as MultidimensionalArray);
        } else yield arr[i] as number;
    }
}