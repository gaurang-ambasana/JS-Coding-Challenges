/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
const calculateTax = (brackets, income) => {
    let res = 0;
    let prev = 0;
    
    for (const [amt, percent] of brackets) {
        const curr = Math.min(income, amt - prev);
        const tax = curr * (percent / 100);
        
        income -= curr;
        res += tax;
        prev = amt;
        
        if (income <= 0) return res; 
    }
};