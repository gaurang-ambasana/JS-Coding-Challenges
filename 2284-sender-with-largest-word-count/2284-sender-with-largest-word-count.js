/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function(messages, senders) {
    const wordCounterBySender = senders.reduce((counter, name, i) => (counter[name] = (counter[name] ?? 0) + messages[i].split(' ').length, counter), {});
    return Object.entries(wordCounterBySender).sort((a, b) => b[1] - a[1] === 0 ? (a[0] > b[0] ? -1 : 1) : b[1] - a[1])[0][0];
};