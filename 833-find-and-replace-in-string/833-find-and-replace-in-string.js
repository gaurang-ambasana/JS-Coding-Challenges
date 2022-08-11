/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {
    let ans = '';
    
    const map = indices.reduce((obj, n, idx) => (obj[n] = {
        source: sources[idx],
        target: targets[idx],
    }, obj), {});
    
    for (let i = 0, n = s.length; i < n; i++) {
        if (map[i]) {
            const { source, target } = map[i];
            const n = source.length;
            
            if (s.substr(i, n) === source) {
                ans += target;
                i += n - 1;
            } else ans += s[i];
        } else ans += s[i];
    }
    
    return ans;
}