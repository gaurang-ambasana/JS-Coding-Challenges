/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    const obj = {};
    let count = 0;
    
    for (const [i, j] of dominoes) {
        const temp = i < j ? `${i}#${j}` : `${j}#${i}`;
        
        if(temp in obj) {
            obj[temp]++;
            count += obj[temp];
        }
        else obj[temp] = 0;
    }
    
    return count;
};