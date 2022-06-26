/**
 * @param {number[]} salary
 * @return {number}
 */
const average = salary => salary.sort((a, b) => a - b).slice(1, salary.length - 1).reduce((a, e) => a + e, 0) / (salary.length - 2);