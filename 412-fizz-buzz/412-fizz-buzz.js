/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function(n) {
    return [...Array(n + 1).keys()].slice(1).map(x => x % 3 === 0 && x % 5 === 0 ? 'FizzBuzz' : x % 3 === 0 ? 'Fizz' : x % 5 ? x.toString() : 'Buzz');
}