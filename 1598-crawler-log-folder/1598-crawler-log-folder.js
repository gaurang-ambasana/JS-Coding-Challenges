/**
 * @param {string[]} logs
 * @return {number}
 */
const minOperations = logs => logs.reduce((steps, l) => l === './' ? steps : l === '../' ? steps > 0 ? --steps : steps : ++steps, 0);