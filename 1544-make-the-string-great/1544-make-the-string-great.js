/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const isUpperCase = c => c === c.toUpperCase();
    const isLowerCase = c => c === c.toLowerCase();
    
    let top = 0;
    const stack = [s[0]];
    
    for (let i = 1; i < s.length; i++) {
        if ((isUpperCase(s[i]) && (s[i].toLowerCase() === stack[top])) || 
            (isLowerCase(s[i]) && (s[i].toUpperCase() === stack[top]))) {
            stack.pop();
            top--;
        } else {
            stack.push(s[i]);
            top++;
        }
    }
    
    return stack.join('');
};