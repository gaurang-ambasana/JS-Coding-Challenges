/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = n => n.split('').map(Number).reduce((max, num) => max > num ? max : num, -Infinity);