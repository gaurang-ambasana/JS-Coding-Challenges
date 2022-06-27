/**
 * @param {string} n
 * @return {number}
 */
const minPartitions = n => [...n].reduce((max, num) => max > num ? max : num, 0);