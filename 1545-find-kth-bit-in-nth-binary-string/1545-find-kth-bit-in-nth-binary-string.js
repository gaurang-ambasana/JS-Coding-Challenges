/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
    const arr = ["0"];
    const invertBits = s => s.split(``).map(x => 1 - x).reverse().join(``);
    
    for (let i = 1, z = n + 1; i < z; i++) {
        const s = arr[i - 1];
        arr.push(s + "1" + invertBits(s));
    }
    
    return arr.at(-1)[k - 1];
}