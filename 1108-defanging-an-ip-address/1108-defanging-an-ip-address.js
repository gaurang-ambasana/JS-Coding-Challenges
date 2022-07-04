/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = address => address.replaceAll(`.`, `[.]`);