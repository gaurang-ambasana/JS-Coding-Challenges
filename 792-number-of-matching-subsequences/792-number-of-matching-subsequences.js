/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
const numMatchingSubseq = (s, words) => words.reduce((res, w) => {
    let flag = true;
    let idx = 0;
    
    for (let i = 0, n = w.length; i < n; i++) {
        const x = s.slice(idx).indexOf(w[i]);
        
        if (x !== -1)
            idx += (x + 1);
        else {
            flag = false;
            break;
        }
    }
    
    flag && ++res;
    
    return res;
}, 0);