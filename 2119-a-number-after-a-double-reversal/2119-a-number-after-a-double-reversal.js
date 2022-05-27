/**
 * @param {number} num
 * @return {boolean}
 */
const isSameAfterReversals = (num) => {
    const reverseNum = n => parseInt(n.toString().split('').reverse().join(''));
    
    return num === reverseNum(reverseNum(num));
};