/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
const percentageLetter = (s, letter) => s.includes(letter) ? Math.floor(s.match(new RegExp(`[${letter}]`,'g'))?.length / s.length * 100) : 0;