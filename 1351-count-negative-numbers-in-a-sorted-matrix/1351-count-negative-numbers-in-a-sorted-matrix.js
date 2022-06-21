/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = function(grid) {
    return grid.reduce((count, row) => count + row.reduce((c, e) => e < 0 ? ++c : c, 0), 0);
};