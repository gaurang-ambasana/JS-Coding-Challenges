/**
 * @param {number[][]} image
 * @return {number[][]}
 */
const flipAndInvertImage = image => image.map(row => row.reverse()).map(row => row.map(e => e === 0 ? 'o' : 'z')).map(row => row.map(e => e === 'o' ? 1 : 0));