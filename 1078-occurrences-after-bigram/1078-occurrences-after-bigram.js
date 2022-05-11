/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    const words = text.split(' ');
    return words.reduce((acc ,word, i) => {
        if (word === first && words[i + 1] === second && words[i + 2])
            acc.push(words[i + 2]);
        return acc;
    }, []);
};