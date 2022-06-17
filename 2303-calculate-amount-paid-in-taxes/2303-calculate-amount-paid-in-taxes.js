/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = (brackets, income) => {
    let res = 0;
    let prev = 0;
    
    for (const [amt, percent] of brackets) {
        const current = Math.min(income, amt - prev);
        const tax = current * (percent / 100);
        
        income -= current;
        res += tax;
        prev = amt;
        
        if (income <= 0) return res;
    }
};