/**
 * @param {number} n
 * @return {number}
 */
const fib = n => n > 1 ? fib(n - 1) + fib(n - 2) : n;