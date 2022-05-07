/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    const map = {};
    let count = 0;
    
    for (const [i, j] of dominoes) {
        const temp = i < j ? `${i}#${j}` : `${j}#${i}`;
        
        if(temp in map) {
            map[temp]++;
            count += map[temp];
        }
        else map[temp] = 0;
    }
    
    return count;
};