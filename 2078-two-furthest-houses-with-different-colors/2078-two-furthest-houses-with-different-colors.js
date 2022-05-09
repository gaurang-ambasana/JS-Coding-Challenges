/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    return colors[0] !== colors[colors.length-1] ? colors.length - 1 : (colors.length - 1) - (Math.min(colors.findIndex(x => x !== colors[0]), colors.reverse().findIndex(x => x !== colors[0])));

};