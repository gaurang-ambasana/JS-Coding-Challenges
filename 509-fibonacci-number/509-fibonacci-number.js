/**
 * @param {number} n
 * @return {number}
 */
var fib = (n) => {
    const s = [0, 1], x = n + 1;
    
    while (s.length < x)
        s.push(s.at(-1) + s.at(-2));
    
    return s[n];
}