function compress(chars: string[]): number {
    chars.push('_');
    let prev = chars.shift(), count = 1;

    for (let i = 1, n = chars.length + 1; i < n; i++) {
        const curr = chars.shift();

        if (prev === curr)
            count++;
        else {
            if (count === 1) {
                chars.push(prev);
            } else {
                chars.push(prev, ...count.toString().split(``));
                count = 1;
            }

            prev = curr;
        }
    }

    return chars.length;
}