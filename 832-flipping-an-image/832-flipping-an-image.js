/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    return image.map(row => row.reverse()).map(row => row.map(e => e === 0 ? 'z' : 'o')).map(row => row.map(e => e === 'z' ? 1 : 0));
};