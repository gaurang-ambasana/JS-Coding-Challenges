/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    return logs.reduce((steps, l, i) => {
        switch (l) {
            case '../': {
                if (steps > 0) --steps;
                return steps;
            }
            
            case './': return steps;
                
            default : {
                ++steps;
                return steps;
            }
        }
    }, 0);
};