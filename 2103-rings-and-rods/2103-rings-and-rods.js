/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = rings => rings.match(/.{1,2}/g).reduce((map, e) => {
    const [color, rod] = e.split(``);
    if (rod in map) map[rod] += color;
    else map[rod] = color;
    return map;
}, Array(rings.length / 2)).filter(w => w && w.includes(`R`) && w.includes(`G`) && w.includes(`B`)).length;