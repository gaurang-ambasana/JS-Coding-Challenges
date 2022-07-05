/**
 * @param {number[][]} rectangle
 */
class SubrectangleQueries {
    constructor(rectangle) {
        this.rectangle = rectangle;
    }
    
    updateSubrectangle(row1, col1, row2, col2, newValue) {
        for (let i = row1; i < row2 + 1; i++)
            for(let j = col1; j < col2 + 1; j++)
                this.rectangle[i][j] = newValue;
    }
    
    getValue(row, col) {
        return this.rectangle[row][col];
    }
}