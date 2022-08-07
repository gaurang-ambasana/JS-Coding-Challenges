/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = coordinates => coordinates.charCodeAt(0) % 2 !== coordinates[1] % 2;