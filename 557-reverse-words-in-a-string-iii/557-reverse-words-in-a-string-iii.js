/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = s => {
    const words = s.split(` `);
    
    for (let i = 0, n = words.length; i< n; i++)
        words[i] = words[i].split(``).reverse().join(``);
    
    return words.join(` `);
}