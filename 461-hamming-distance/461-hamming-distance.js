/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = (x, y) => {
    let diff = 0;
    let bX = x.toString(2);
    let bY = y.toString(2);
    
    if (bX.length !== bY.length) {
        if (bX.length > bY.length) bY = '0'.repeat(bX.length - bY.length).concat(bY);
        else bX = '0'.repeat(bY.length - bX.length).concat(bX);
    }
    
    for (let i = 0; i < bX.length; i++)
        if (bX[i] !== bY[i])
            diff++;
    
    return diff;
};