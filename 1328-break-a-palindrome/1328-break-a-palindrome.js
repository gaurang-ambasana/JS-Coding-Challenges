var breakPalindrome = function(palindrome) {
    if (palindrome.length > 1) {   
        const p = palindrome.split(``);
        
        for (var i = 0, n = p.length; i < n; i++) {
            if (p[i] !== `a` && i !== (n - 1) / 2) {
                p[i] = `a`;
                return p.join(``);
            }
        }
        
        p[n - 1] = 'b';
        
        return p.join(``)
    } else return ``;
};