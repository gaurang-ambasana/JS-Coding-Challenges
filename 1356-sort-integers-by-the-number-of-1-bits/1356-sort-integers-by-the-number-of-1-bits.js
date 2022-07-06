/**
 * @param {number[]} arr
 * @return {number[]}
 */
const sortByBits = arr => arr.sort((a, b) => (a.toString(2).replaceAll(`0`,``).length - b.toString(2).replaceAll(`0`,``).length) || a - b);