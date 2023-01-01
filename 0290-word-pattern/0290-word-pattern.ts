function wordPattern(pattern: string, s: string): boolean {
    const map = new Map<string, string>(), sArr = s.split(` `);

    if (sArr.length !== pattern.length || new Set(pattern).size !== new Set(sArr).size)
        return false;

    for (let i = 0, n = pattern.length; i < n; i++)
        if (map.has(pattern[i])) {
            if (map.get(pattern[i]) !== sArr[i])
                return false;
        } else map.set(pattern[i], sArr[i]);

    return true;
}