/**
 * @param {string} s
 * @return {boolean}
 */
const checkOnesSegment = s => s.split('0').filter(Boolean).length < 2;