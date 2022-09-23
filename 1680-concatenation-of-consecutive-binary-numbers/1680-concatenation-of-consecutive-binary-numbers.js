/**
 * @param {number} n
 * @return {number}
 */
const concatenatedBinary = n => [...Array(n + 1).keys()].slice(2).reduce(({ ans, len }, i) => {
    if (i === len) len *= 2;
    return { ans: (ans * len + i) % 1000000007, len };
}, { len: 4, ans: 1 }).ans;