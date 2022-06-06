/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = (accounts) => accounts.reduce((max, ele) => Math.max(max, ele.reduce((sum, ele) => sum += ele, 0)), 0);
                                