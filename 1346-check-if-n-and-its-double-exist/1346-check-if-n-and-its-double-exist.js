/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = arr => arr.some((e, i) => {
    const x = [...arr];
    x.splice(i, 1);
    return x.includes(e * 2);
});