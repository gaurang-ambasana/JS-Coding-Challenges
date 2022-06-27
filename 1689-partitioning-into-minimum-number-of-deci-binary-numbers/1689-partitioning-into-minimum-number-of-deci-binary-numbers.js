/**
 * @param {string} n
 * @return {number}
 */
const minPartitions = (n) => [...n].map(Number).reduce((max, num) => max > num ? max : num, 0);