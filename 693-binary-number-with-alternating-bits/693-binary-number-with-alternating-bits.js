/**
 * @param {number} n
 * @return {boolean}
 */
const hasAlternatingBits = n => n.toString(2).split('').every((b, i, a) => b !== a[i + 1]);