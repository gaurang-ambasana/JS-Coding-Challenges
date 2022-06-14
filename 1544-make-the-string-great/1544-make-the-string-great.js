/**
 * @param {string} s
 * @return {string}
 */
const makeGood = (s) => s.split('').reduce((str, c) => {
    if ((c === c.toUpperCase() && (c.toLowerCase() === str[str.length - 1])) || (c === c.toLowerCase() && (c.toUpperCase() === str[str.length - 1])))
        return str.slice(0, -1);
    else return str.concat(c);
}, '');