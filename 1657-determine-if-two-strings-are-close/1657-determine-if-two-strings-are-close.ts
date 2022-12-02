function closeStrings(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) return false;

    const getPattern = (s: string): { [index: string]: number } => s.split(``).reduce((f, n) => (f[n] = (f[n] ?? 0) + 1, f), {});

    const f1 = getPattern(word1), f2 = getPattern(word2);

    for (const c in f1)
        if (!(c in f2))
            return false;

    return Object.entries(getPattern(Object.values(f1).join(``))).sort(([, a], [, b]) => a - b).reduce((s, [c, f]) => s.concat(c.repeat(f)), ``) === Object.entries(getPattern(Object.values(f2).join(``))).sort(([, a], [, b]) => a - b).reduce((s, [c, f]) => s.concat(c.repeat(f)), ``);
};