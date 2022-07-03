/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canMakeArithmeticProgression = arr => {
    if (arr.every(v => v === arr[0]))
        return true;
    
    if (new Set(arr).size !== arr.length)
        return false;
    
    arr.sort((a, b) => a - b);
    
    let a = arr[0];
    const d = arr[1] - arr[0];
    
    for (let i = 0, n = arr.length - 1; i < n; i++) {
        const nxt = a + d;
        
        if (!arr.includes(nxt))
            return false;
        
        a = nxt;
    }
    
    return true;
};