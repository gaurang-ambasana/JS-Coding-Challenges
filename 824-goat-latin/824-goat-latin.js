/**
 * @param {string} sentence
 * @return {string}
 */
const toGoatLatin = sentence => {
    const words = sentence.split(` `);
    
    for (let i = 0, n = words.length; i < n; i++) {
        if ([`a`, `e`, `i`, `o`, `u`].includes(words[i][0].toLowerCase()))
            words[i] += 'ma';
        else words[i] = words[i].slice(1) + words[i].slice(0, 1) + 'ma';
        
        words[i] += `a`.repeat(i + 1);
    }
    
    return words.join(` `);
};