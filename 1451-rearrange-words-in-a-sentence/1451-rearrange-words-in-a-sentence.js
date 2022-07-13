/**
 * @param {string} text
 * @return {string}
 */
const arrangeWords = text => text.toLowerCase().split(` `).sort((a, b) => a.length - b.length).map((s, i) => i ? s : s[0].toUpperCase() + s.slice(1)).join(` `);