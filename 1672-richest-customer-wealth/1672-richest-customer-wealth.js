/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = (accounts) => Math.max(...accounts.map(a => a.reduce((sum, e) => sum + e, 0)));