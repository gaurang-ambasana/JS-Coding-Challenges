/**
 * @param {string} n
 * @return {number}
 */
const minPartitions = n => n.split(``).map(Number).reduce((max, num) => max > num ? max : num, -Infinity);