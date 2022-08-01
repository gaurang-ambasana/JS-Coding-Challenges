/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = s => s.split(`|`).filter((w, i) => w.includes(`*`) && i % 2 === 0).reduce((count, w) => count + w.replaceAll(/\w*/g, ``).length, 0);