/**
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks = (score) => {
    const map = [...score].sort((a, b) => b - a).reduce((res, s, i) => {
        switch (i) {
            case 0: {
                res[s] = "Gold Medal";
                return res;
            }
                
            case 1: {
                res[s] = "Silver Medal";
                return res;
            }
                
            case 2: {
                res[s] = "Bronze Medal";
                return res;
            }
                
            default : {
                res[s] = (i + 1).toString();
                return res;
            }
        }
    }, {});
    
    return score.map(s => map[s]);
};