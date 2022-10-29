function groupAnagrams(strs: string[]): string[][] {
    const map: { [index: string]: Array<string> } = {};
                
    for (let i = 0, n = strs.length; i < n; i++) {
        const word = strs[i];
        const tmp = word.split(``).sort().join(``);
        
        if (tmp in map)
            map[tmp].push(word);
        else map[tmp] = [word];
    }
                
    return Object.values(map);
}