/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
const findRotation = (mat, target) => {
    const compare = () => mat.every((row, i) => row.every((val, j) => val === target[i][j]));
    
    const rotate = () => {
        const clone = [...mat].reverse();
    
        for (let i = 0; i < mat.length; i++) {
            mat[i] = clone.reduce((arr, row) => {
                arr.push(row[i]);
                return arr;
            }, []);
        }
    }
    
    for (let i = 0; i < 4; i++) {
        if (compare()) return true;
        rotate();
    }
    return false;
};