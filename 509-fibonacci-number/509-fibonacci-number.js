/**
 * @param {number} n
 * @return {number}
 */
var fib = n => n > 1 ? fib(n - 1) + fib(n - 2) : n;