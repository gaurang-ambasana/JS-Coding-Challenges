const removeDuplicates: Function = (s: string): string => s.slice(1).split(``).reduce((stack, c) => stack[stack.length - 1] === c ? stack.slice(0, -1) : stack.concat(c), s[0]);