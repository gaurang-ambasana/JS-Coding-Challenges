/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    let score = 0, max = 0, left = 0, right = tokens.length - 1;
    tokens.sort((a, b) => a - b);
    
    while (left <= right) {
        const p1 = tokens[left], p2 = tokens[right];
        if (tokens[left] <= power) {
            score++;
            power -= p1;
            left++;
            
            if (max < score)
                max = score;
        } else if (score > 0 && p1 > power) {
            power += p2;
            score--;
            right--;
        } else return max;
    }
    
    return max;
};