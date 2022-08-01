/**
 * @param {string} s
 * @return {character}
 */
const repeatedCharacter = s => {
    const set = new Set();
    
    for (let i = 0, n = s.length; i < n; i++)
        if (!set.has(s[i])) set.add(s[i]);
        else return s[i];
}