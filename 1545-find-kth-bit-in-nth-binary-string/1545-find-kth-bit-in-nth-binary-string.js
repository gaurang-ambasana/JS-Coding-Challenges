/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
    const arr = {
        1: "0",
    };
    
    for (let i = 2, z = n + 1; i < z; i++) {
        const s = arr[i - 1].toString();
        arr[i] = s + "1" + s.split(``).map(x => 1 - x).reverse().join(``);
    }
    
    return arr[n][k - 1];
}