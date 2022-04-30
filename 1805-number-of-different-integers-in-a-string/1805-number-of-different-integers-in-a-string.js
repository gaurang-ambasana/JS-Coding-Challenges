/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    const nums = [];
    let num = '0';

    for (let i = 0; i <= word.length; i++) {
        if(isNaN(parseInt(word[i]))) {
            if(num !== '0') {
                nums.includes(BigInt(num)) || nums.push(BigInt(num));
                num = '0'; 
            }
        } else num += word[i].toString();
    }
    
    return nums.length;
};