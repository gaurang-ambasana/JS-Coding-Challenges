/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicates = (s) => s.split(``).slice(1).reduce((stack, c) => {
    stack.at(-1) === c ? stack.pop() : stack.push(c);
    return stack;
}, [s[0]]).join(``);