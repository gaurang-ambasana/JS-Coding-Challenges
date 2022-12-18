function dailyTemperatures(temperatures: number[]): number[] {
    const stack = [], ans = Array(temperatures.length).fill(0);

    for (let i = temperatures.length - 1; i > -1; i--) {
        const t = temperatures[i];

        while (stack.length > 0 && temperatures[stack.at(-1)] <= t)
            stack.pop();

        if (stack.length > 0)
            ans[i] = stack.at(-1) - i;

        stack.push(i);
    }

    return ans;
}