/**
 * @param {number[][]} image
 * @return {number[][]}
 */
const flipAndInvertImage = image => image.map(row => row.reverse().map(e => e ^ 1));