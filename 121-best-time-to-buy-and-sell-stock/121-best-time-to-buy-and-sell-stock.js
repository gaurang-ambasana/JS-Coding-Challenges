/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0, left = prices[0];

    for (let i = 1; i < prices.length ; i++) {
        const right = prices[i];
        if (left > right) left = right;
        if (right - left > profit) profit = right - left;
    }
    
    return profit;
};