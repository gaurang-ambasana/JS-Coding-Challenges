/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
const calculateTax = (brackets, income) => {
    return brackets.reduce(([tax, prev], [amt, percent]) => {
        if (income <= 0) brackets.length = 0;
        const current = income > amt - prev ? amt - prev : income;
        tax += current * (percent / 100);
        income -= current;
        return [tax, amt];
    },[0, 0])[0];
};
