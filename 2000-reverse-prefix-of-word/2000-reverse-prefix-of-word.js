/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = (word, ch) => {
    const idx = word.indexOf(ch) + 1;
    return word.slice(0, idx).split(``).reverse().join(``).concat(word.slice(idx));
}