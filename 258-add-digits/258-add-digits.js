/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (num.toString().length > 1)
        num = num.toString().split(``).reduce((sum, n) => parseInt(sum) + parseInt(n), 0)
    
    return num;
};