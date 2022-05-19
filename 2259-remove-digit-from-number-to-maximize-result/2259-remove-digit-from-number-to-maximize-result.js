/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
const removeDigit = (number, digit) => {
    let max = '0';
    const nums = number.split('');
    
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        const temp = [...number];
        if (n === digit) {
            temp.splice(i, 1);
            const curr = temp.join('')
            if (curr > max)
                max = curr;
        }
    }
    
    return max;
}