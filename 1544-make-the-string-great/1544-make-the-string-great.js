/**
 * @param {string} s
 * @return {string}
 */
const makeGood = s => {
    const isUpperCase = c => c === c.toUpperCase();
    const isLowerCase = c => c === c.toLowerCase();
    
    const stack = [s[0]];
    
    for (let i = 1; i < s.length; i++)
        (isUpperCase(s[i]) && (s[i].toLowerCase() === stack[stack.length - 1])) || (isLowerCase(s[i]) && (s[i].toUpperCase() === stack[stack.length - 1])) ? stack.pop() : stack.push(s[i]);
    
    return stack.join('');
};