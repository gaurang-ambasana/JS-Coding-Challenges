/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
const calculateTax = (brackets, income) => {
    let ans = 0;
    let left = income;
    let prev = 0;
    
    for (let i = 0; i < brackets.length && left > 0; i++) {
        const amount = left > brackets[i][0] - prev ? brackets[i][0] - prev : left;
        const tax = amount * (brackets[i][1] / 100);
        
        left -= amount;
        ans += tax;
        prev = brackets[i][0];
    }
    
    return ans;
};