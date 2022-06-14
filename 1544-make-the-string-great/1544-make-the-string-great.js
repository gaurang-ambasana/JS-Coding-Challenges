/**
 * @param {string} s
 * @return {string}
 */
const makeGood = (s) => {
    let stack = `${s[0]}`;
    
    for (let i = 1; i < s.length; i++)
        (s[i] === s[i].toUpperCase() && (s[i].toLowerCase() === stack[stack.length - 1])) || (s[i] === s[i].toLowerCase() && (s[i].toUpperCase() === stack[stack.length - 1])) ? (stack = stack.slice(0, -1)) : (stack = stack.concat(s[i]));
    
    return stack;
};