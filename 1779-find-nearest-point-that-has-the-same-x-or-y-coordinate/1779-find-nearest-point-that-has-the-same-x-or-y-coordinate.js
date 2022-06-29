/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
const nearestValidPoint = (x, y, points) => {
    const distanceAtIdx = points.reduce((o, [a, b], i) => x === a || y === b ? (o[i] = Math.abs(x - a) + Math.abs(y - b), o) : o, {});
    const min = Math.min(...Object.values(distanceAtIdx));
    const ans = Object.keys(distanceAtIdx).filter(idx => distanceAtIdx[idx] === min);
    return ans.length === 0 ? -1 : Math.min(...ans);
};