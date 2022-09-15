/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = n => {
    const arr = [1, 1], x = n + 1;
    
    while (arr.length !== n + 1) 
        arr.push(arr.at(-1) + arr.at(-2));
    
    return arr[n];
};