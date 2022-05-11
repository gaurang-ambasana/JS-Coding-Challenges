/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
const findOcurrences = (text, first, second) => {
    const words = text.split(' ');
    return words.reduce((acc ,word, i) => {
        if (i < 2) return acc;
        if (words[i - 2] === first && words[i - 1] === second)
            acc.push(word);
        return acc;
    }, []);
};