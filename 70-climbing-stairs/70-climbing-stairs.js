/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = (n) => {
    const a = [1, 1], x = n + 1;
    
    while (a.length !== n + 1) 
        a.push(a.at(-1) + a.at(-2));
    
    return a[n];
};