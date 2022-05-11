/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = (s, k) => s.match(new RegExp(`.{1,${k}}`, 'g')).map((s, i) => i % 2 === 0 ? s.split('').reverse().join('') : s).join('');
