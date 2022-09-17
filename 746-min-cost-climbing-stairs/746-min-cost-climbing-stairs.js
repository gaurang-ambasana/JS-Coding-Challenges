/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    for (let i = cost.length - 3; i > -1; i--)
        cost[i] += Math.min(cost[i + 1], cost[i + 2]);
    
    return Math.min.apply(null, cost.slice(0, 2));
};