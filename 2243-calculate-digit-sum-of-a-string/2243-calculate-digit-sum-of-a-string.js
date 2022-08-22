/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const digitSum = (s, k) => {
    const getSum = arr => arr.reduce((a, n) => parseInt(a) + parseInt(n), 0).toString();
    const regex = new RegExp(`.{1,${k}}`, `g`);
    while (s.length > k) {
        const parts = s.match(regex);
        s = parts.map(p => getSum(p.split(``))).join(``);
    }
    
    return s;
}