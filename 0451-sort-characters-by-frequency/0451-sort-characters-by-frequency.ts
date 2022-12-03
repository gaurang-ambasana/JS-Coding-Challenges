function frequencySort(s: string): string {
    return Object.entries(s.split(``).reduce((f: { [index: string]: number }, c) => (f[c] = (f[c] ?? 0) + 1, f), {})).sort(([, a], [, b]) => b - a).reduce((str, [char, freq]) => str.concat(char.repeat(freq)), ``);
}