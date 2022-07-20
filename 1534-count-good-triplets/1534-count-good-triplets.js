/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
const countGoodTriplets = (arr, a, b, c) => {
    let ans = 0;
    
    for (let i = 0, n = arr.length; i < n; i++)
        for (let j = i + 1; j < n; j++)
            for (let k = j + 1; k < n; k++)
                if (Math.abs(arr[i] - arr[j]) < a + 1)
                    if (Math.abs(arr[j] - arr[k]) < b + 1)
                        if (Math.abs(arr[i] - arr[k]) < c + 1)
                            ans++;
    
    return ans;
};