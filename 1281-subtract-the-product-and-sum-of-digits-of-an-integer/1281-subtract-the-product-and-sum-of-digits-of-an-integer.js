/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = n => {
    const x = n.toString().split('').map(Number);
    return x.reduce((p, e) => p * e, 1) - x.reduce((s, e) => s + e, 0);
}