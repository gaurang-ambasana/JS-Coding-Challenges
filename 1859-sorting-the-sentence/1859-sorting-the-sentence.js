/**
 * @param {string} s
 * @return {string}
 */
const sortSentence = s => s.split(` `).sort((a, b) => a.at(-1) - b.at(-1)).map(w => w.slice(0, -1)).join(` `);