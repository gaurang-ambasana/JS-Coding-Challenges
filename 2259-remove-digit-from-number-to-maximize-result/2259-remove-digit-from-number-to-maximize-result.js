/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
const removeDigit = (number, digit) => {
    let max = '0';
    
    for (const i in number) {
        const temp = [...number];
        
        if (number[i] === digit) {
            temp.splice(i, 1);
            
            const curr = temp.join(''); 
            if (max < curr) max = curr;
        }
    }
    
    return max;
}