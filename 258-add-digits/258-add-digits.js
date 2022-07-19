const addDigits = num => {
    do {
        num = num.toString().split(``).reduce((sum, n) => parseInt(sum) + parseInt(n), 0);
    } while (num.toString().length > 1)
    
    return num;
}