function lengthOfLongestSubstring(s: string): number {
    let len: number = 0;
    
    for (let i = 0, n = s.length; i < n; i++) {
        const tmp = new Set<string>(s[i]);
        
        for (let j = i + 1; j < n; j++) {
            if (tmp.has(s[j]))
                break;
            
            tmp.add(s[j]);
        }

        if (tmp.size > len)
            len = tmp.size;
    }

    return len;
};