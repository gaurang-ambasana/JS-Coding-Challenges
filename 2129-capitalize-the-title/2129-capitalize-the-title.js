/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    return title.split(' ').map(w => w.length > 2 ? 
      w.substring(0, 1).toUpperCase().concat(w.substring(1, w.length).toLowerCase()) 
      : w.toLowerCase()).join(' ');
};