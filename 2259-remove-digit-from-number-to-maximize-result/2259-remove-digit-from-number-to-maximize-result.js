/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
const removeDigit = (number, digit) => {
    let max = '0';
    
    for (const i in number) {
        const tmp = [...number];
        
        if (number[i] === digit) {
            tmp.splice(i, 1);
            
            const curr = tmp.join(''); 
            if (curr > max) max = curr;
        }
    }
    
    return max;
}