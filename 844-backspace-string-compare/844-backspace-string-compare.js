/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = (s, t) => {
    const stack1 = [];
    const stack2 = [];
    
    for (const char of s) {
        if (char !== '#') stack1.push(char);
        else stack1.pop();
    }
    
    for (const char of t) {
        if (char !== '#') stack2.push(char);
        else stack2.pop();
    }
    
    return stack1.length === stack2.length && stack1.every((char, i) => char === stack2[i]);
};