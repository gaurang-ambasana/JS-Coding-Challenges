/**
 * @param {string} s
 * @return {number}
 */
const countSegments = s => s.trim().split(` `).filter(Boolean).length;