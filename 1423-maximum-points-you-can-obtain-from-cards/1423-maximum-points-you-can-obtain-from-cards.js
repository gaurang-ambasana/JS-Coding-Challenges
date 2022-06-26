/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
const maxScore = function(cardPoints, k) {
    if (k === cardPoints.length) return cardPoints.reduce((sum, e) => sum + e, 0);
    
    let sum = cardPoints.slice(0, k).reduce((a, e) => a + e, 0);
    let max = sum;
    
    for (let i = 0, n = cardPoints.length; i < k; i++) {
        sum = sum - cardPoints[k - i - 1] + cardPoints[n - i - 1];
        max = Math.max(sum, max);
    }
    
    return max;
};