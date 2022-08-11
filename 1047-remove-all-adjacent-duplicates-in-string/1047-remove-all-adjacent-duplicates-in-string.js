/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicates = s => s.split(``).slice(1).reduce((stack, c) => {
    if (stack.at(-1) === c)
        stack.pop();
    else stack.push(c);
    return stack;
}, [s[0]]).join(``);