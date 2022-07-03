/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = n => {
    if (n === 1 || n === 7)
        return true;
    
    if (n > 9) {
        while (n.toString().length > 1) {
            n = n.toString().split(``).reduce((p, x) => p + (x ** 2), 0);
            
            if (parseInt(n) === 1)
                return true;
        }
        const x = parseInt(n);
        return x === 1 || x === 7;
    } else return false;
};