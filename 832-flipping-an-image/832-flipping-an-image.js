/**
 * @param {number[][]} image
 * @return {number[][]}
 */
const flipAndInvertImage = (image) => image.map(row => row.reverse()).map(row => row.map(e => e === 0 ? 'z' : 'o')).map(row => row.map(e => e === 'z' ? 1 : 0));