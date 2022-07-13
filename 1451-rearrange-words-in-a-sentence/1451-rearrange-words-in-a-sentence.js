/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
    return text.toLowerCase().split(` `).sort((a, b) => a.length - b.length).map((s, i) => i !== 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)).join(` `); 
};