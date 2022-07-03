/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = (mat, r, c) => {
    const flatArr = mat.flat();
    if (flatArr.length !== r*c) return mat;
    const res = [];
    
    for(let i = 0; i < r; i++)
        res.push(flatArr.splice(0, c));
    
    return res;
};