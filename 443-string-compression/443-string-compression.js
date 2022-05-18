/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = (chars) => {
    const arr = [chars[0]];
    
    for (let i = 1; i < chars.length; i++) {
        const n = arr.length - 1;
        if (arr[n][0] !== chars[i]) {
            arr.push(chars[i]);
        } else arr[n] = arr[n].concat(chars[i]);
    }
    
    chars.splice(0, chars.length, ...arr.reduce((a, c) => c.length > 1 ? a.concat(c[0] + c.length) : a.concat(c), '').split(''))
};