function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    const helper: { [index: string]: (a: number, b: number) => number } = {
		'+': (a, b) => a + b,
		'-': (a, b) => b - a,
		'*': (a, b) => a * b,
		'/': (a, b) => Math.trunc(b / a),
	}; 

    for (let i = 0, n = tokens.length; i < n; i++) {
        const t = tokens[i];
        t in helper ?
            stack.push(helper[t](stack.pop(), stack.pop()))
            : stack.push(parseInt(t));
    }

    return stack[0];
}