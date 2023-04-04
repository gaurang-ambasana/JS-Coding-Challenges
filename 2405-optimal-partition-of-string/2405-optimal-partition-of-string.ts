function partitionString(s: string): number {
    let ans = 0, tmp = new Set<string>();

    for (let i = 0, n = s.length; i < n; i++) {
        if (tmp.has(s[i])) {
            ans++;
            tmp.clear();
        }

        tmp.add(s[i]);
    }

    return ++ans;
}