type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function(arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
    if (n === 0) return arr.slice();
    
    const ans = [];

    for (let i = 0, x = arr.length; i < x; i++)
        Array.isArray(arr[i])
            ? ans.push(...flat(arr[i] as MultiDimensionalArray, n - 1))
            : ans.push(arr[i]);

    return ans;
}