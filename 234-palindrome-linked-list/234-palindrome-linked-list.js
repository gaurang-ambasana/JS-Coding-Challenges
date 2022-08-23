var isPalindrome = head => {
    const { val, next } = head;
    const arr = [val];
    
    let node = next;
    
    while (node) {
        const { val, next } = node;
        arr.push(val);
        node = next;
    }
    
    return arr.join(``) === arr.reverse().join(``);
}