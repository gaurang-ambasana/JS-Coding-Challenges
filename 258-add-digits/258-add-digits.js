const addDigits = num => {
    while (num.toString().length > 1)
        num = num.toString().split(``).reduce((sum, n) => parseInt(sum) + parseInt(n), 0)
    
    return num;
};