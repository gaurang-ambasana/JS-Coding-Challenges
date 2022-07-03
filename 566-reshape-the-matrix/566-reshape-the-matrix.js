/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = (mat, r, c) => {
    const flatArr = mat.flat();
    
    if (flatArr.length !== r*c) return mat;
    
    const res = [];
    
    for (let _ = 0; _ < r; _++)
        res.push(flatArr.splice(0, c));
    
    return res;
};