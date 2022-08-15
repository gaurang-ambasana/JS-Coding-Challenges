/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const digitSum = (s, k) => {
    while (s.length > k) {
        const regex = new RegExp(`.{1,${k}}`, `g`);
        const getSum = arr => arr.reduce((a, n) => parseInt(a) + parseInt(n), 0).toString();
        const parts = s.match(regex);
        s = parts.map(p => getSum(p.split(``))).join(``);
    }
    
    return s;
}