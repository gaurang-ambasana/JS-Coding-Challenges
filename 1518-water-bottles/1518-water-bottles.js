/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let drunk = 0;
    
    while(numBottles !== 0) {
        if(numBottles >= numExchange) {
          numBottles -= numExchange;
          drunk += numExchange;  
          numBottles++;
        } else {
            drunk += numBottles;
            numBottles = 0;
        }
    }
    
    return drunk;
};