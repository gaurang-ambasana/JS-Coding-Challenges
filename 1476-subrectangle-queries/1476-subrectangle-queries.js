/**
 * @param {number[][]} rectangle
 */
class SubrectangleQueries {
    constructor(rectangle) {
        this.rec = rectangle;
    }
    
    updateSubrectangle(row1, col1, row2, col2, newValue) {
        for (let x = row1; x < row2 + 1; x++)
            for(let y = col1; y < col2 + 1; y++)
                this.rec[x][y] = newValue;
    }
    
    getValue(row, col) {
        return this.rec[row][col];
    }
}