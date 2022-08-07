/**
 * @param {string} coordinates
 * @return {boolean}
 */
const squareIsWhite = coordinates => coordinates.charCodeAt(0) % 2 !== coordinates[1] % 2;