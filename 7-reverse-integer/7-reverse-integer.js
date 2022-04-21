/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const strNum =  x.toString();
    const min = -(2 ** 31);
    const max = (2 ** 31) - 1;
    
    if(strNum[0] === '-') {
        const [sign, ...digits] = strNum.split('');
        const reversed = parseInt(sign + digits.reverse().join(''));
        return ((reversed >= min) && (reversed <= max)) ? 
            reversed : 0;
    }
    
    const reversed = parseInt(strNum.split('').reverse().join(''));
    return ((reversed >= min) && (reversed <= max)) ? 
            reversed : 0;
};