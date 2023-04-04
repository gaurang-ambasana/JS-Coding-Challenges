function partitionString(s: string): number {
    let ans = 0, tmp = new Set<string>();

    for (const char of s) {
        if (tmp.has(char)) {
            ans++;
            tmp.clear();
        }

        tmp.add(char);
    }

    return ++ans;
}