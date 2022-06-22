/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = function(words, k) {
    const wordCounter = words.reduce((counter, word) => (counter[word] = (counter[word] ?? 0) + 1, counter), {});
                                     
    return Object.entries(wordCounter).sort((a, b) => b[1] - a[1] === 0 ? a[0].localeCompare(b[0]) : b[1] - a[1]).slice(0, k).map(([word, _]) => word);
};