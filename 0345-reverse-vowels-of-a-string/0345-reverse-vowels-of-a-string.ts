function reverseVowels(s: string): string {
    let ans: string = ``;
    
    const regex: RegExp = new RegExp(`[aeiouAEIOU]`,`g`)
    const vowels: Array<string> = s.match(regex);

    for (let i = 0, n = s.length; i < n; i++) {
        if (`aeiouAEIOU`.includes(s[i])) {
            ans += vowels.pop();
        } else ans += s[i];
    }

    return ans;
};