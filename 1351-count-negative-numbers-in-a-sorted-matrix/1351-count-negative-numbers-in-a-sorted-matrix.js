/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = (grid) => grid.reduce((count, row) => count + row.reduce((c, e) => e < 0 ? ++c : c, 0), 0);