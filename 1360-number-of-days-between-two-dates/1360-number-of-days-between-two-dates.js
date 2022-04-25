/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
    const d1 = Date.parse(date1);
    const d2 = Date.parse(date2);
    
    const diff = Math.abs(d2 - d1);
    
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
};