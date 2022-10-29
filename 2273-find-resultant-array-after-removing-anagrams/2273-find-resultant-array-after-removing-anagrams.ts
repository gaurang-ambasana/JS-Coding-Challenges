const removeAnagrams = (words: string[]): string[] => words.reduce(({ ans, prev }, curr) => {
    const tmp = curr.split(``).sort().join(``);
    
    if (prev !== tmp) {
        prev = tmp;
        ans.push(curr);
    }
        
    return { ans, prev };
}, { ans : [], prev: `` }).ans;