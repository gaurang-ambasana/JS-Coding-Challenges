/**
 * @param {number[][]} rectangle
 */
class SubrectangleQueries {
    constructor(rectangle) {
        this.rec = rectangle;
    }
    
    updateSubrectangle(row1, col1, row2, col2, newValue) {
        for (let i = row1; i < row2 + 1; i++)
            for(let j = col1; j < col2 + 1; j++)
                this.rec[i][j] = newValue;
    }
    
    getValue(row, col) {
        return this.rec[row][col];
    }
}