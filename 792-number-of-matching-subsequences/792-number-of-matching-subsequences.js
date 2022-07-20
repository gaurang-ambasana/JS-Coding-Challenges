/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = (s, words) => {
    return words.reduce((res, w) => {
        let flag = true;
        let idx = 0;
        for (let i = 0, n = w.length; i < n; i++) {
            const x = s.slice(idx).indexOf(w[i]);
            
            if (x !== -1) idx += (x + 1);
            else {
                i = n;
                flag = false;
            }  
        }
        
        flag && ++res;
        return res;
    }, 0);
};