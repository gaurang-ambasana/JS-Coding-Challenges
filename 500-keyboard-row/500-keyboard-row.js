/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = (words) => words.filter((w) => {
    const wArr = w.toLowerCase().split(``);
    return wArr.every(c => `qwertyuiop`.includes(c)) || wArr.every(c => `asdfghjkl`.includes(c)) || wArr.every(c => `zxcvbnm`.includes(c));
});