/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = chars => {
    const arr = [chars[0]];
    const t = chars.length;
    for (let i = 1; i < t; i++) {
        const n = arr.length - 1;
        if (arr[n][0] !== chars[i]) arr.push(chars[i]);
        else arr[n] = arr[n].concat(chars[i]);
    }
    
    const str = arr.reduce((a, c) => c.length > 1 ? a.concat(c[0] + c.length) : a.concat(c), '');
    
    chars.splice(0, t, ...str.split(''))
};