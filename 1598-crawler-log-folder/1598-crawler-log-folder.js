/**
 * @param {string[]} logs
 * @return {number}
 */
const minOperations = (logs) => logs.reduce((steps, l) => {
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