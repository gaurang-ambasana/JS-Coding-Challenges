/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = (text) => text.toLowerCase().split(` `).sort(({ length: a }, { length: b }) => a - b).map((s, i) => i ? s : s[0].toUpperCase() + s.slice(1)).join(` `);