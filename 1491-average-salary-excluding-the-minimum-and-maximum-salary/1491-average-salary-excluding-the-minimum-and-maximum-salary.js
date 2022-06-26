/**
 * @param {number[]} salary
 * @return {number}
 */
const average = salary => salary.sort((a, b) => a - b).slice(1, salary.length - 1).reduce((sum, e) => sum + e, 0) / (salary.length - 2);