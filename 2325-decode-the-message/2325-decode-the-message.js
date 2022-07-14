/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = (key, message) => {
    const letters = `abcdefghijklmnopqrstuvwxyz`;
    const modKey = [...new Set(key.replaceAll(` `, ``).split(``))];
    const map = modKey.reduce((m, l, i) => (m[l] = letters[i], m), {});
    return message.split(` `).map(w => w.split(``).map(c => map[c]).join(``)).join(` `);
};