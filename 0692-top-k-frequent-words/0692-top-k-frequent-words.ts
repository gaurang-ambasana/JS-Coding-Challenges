function topKFrequent(words: string[], k: number): string[] {
    return Object.entries(words.reduce((c, w) => (c[w] = (c[w] ?? 0) + 1, c), {})).sort(([w1, f1], [w2, f2]) => {
    const diff = <number>f2 - <number>f1;
    return diff === 0 ? w1.localeCompare(w2) : diff
}).slice(0, k).map(([w,]) => w);
}