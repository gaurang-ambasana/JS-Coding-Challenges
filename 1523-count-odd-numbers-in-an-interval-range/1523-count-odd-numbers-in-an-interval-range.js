/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const countOdds = (low, high) => {
    let res = 0;
    for (let i = low; i < high + 1; i++)
        if (i % 2) res++;
    return res;
};