/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let start = 0;
    
    while (start < matrix.length) {
        
        for (let i = 0; i < matrix[0].length; i++) {
            if (start === matrix.length - 1 || i === matrix[0].length - 1)
                    continue;
            
            if (matrix[start][i] !== matrix[start + 1][i + 1])
                    return false;
        }
        
        start++;
    }
    
    return true;
};