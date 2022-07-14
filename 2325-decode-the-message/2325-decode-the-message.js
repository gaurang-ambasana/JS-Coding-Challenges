/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
const decodeMessage = (key, message) => {
    const letters = `abcdefghijklmnopqrstuvwxyz`;
    const modKey = [...new Set(key.replaceAll(` `, ``).split(``))];
    const map = modKey.reduce((m, l, i) => (m[l] = letters[i], m), {});
    return message.split(``).map(w => w in map ? map[w] : w).join(``);
};