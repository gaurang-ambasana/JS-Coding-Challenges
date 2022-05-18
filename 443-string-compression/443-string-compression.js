/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    const arr = [chars[0]];
    for (let i = 1; i < chars.length; i++) {
        if (arr[arr.length - 1][0] !== chars[i]) {
            arr.push(chars[i]);
        } else arr[arr.length - 1] = arr[arr.length - 1].concat(chars[i]);
    }
    const res = arr.reduce((a, c) => c.length > 1 ? a.concat(c[0] + c.length) : a.concat(c), '');
    chars.splice(0, chars.length, ...res.split(''))
};