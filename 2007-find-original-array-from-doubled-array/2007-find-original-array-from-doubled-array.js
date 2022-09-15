/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = (changed) => {
    if (changed.length % 2 !== 0) return [];
    
    changed.sort((a, b) => a - b);
    
    const map = {}, ans = [];
    
    for (const i in changed) {
        const curr = changed[i];
        
        if (curr in map) {
            const freq = map[curr];
            if (freq === 1) delete map[curr];
            else map[curr] = freq - 1;
        } else {
            const double = curr * 2;
            map[double] = (map[double] ?? 0) + 1;
            ans.push(curr);
        }
    }
    
    return Object.values(map).length > 0 ? [] : ans;
};