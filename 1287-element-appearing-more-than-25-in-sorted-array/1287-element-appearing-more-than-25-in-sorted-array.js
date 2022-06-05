/**
 * @param {number[]} arr
 * @return {number}
 */
const findSpecialInteger = (arr) => {
    const required = arr.length * 0.25;
    const freqOfArr = arr.reduce((c, e) => (c[e] = (c[e] ?? 0) + 1, c), {});
    return Object.keys(freqOfArr).find((e) => freqOfArr[e] > required);
};