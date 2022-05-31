/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = words => {
    const convenienceTable = {
        a:".-",
        b:"-...",
        c:"-.-.",
        d:"-..",
        e:".",
        f:"..-.",
        g:"--.",
        h:"....",
        i:"..",
        j:".---",
        k:"-.-",
        l:".-..",
        m:"--",
        n:"-.",
        o:"---",
        p:".--.",
        q:"--.-",
        r:".-.",
        s:"...",
        t:"-",
        u:"..-",
        v:"...-",
        w:".--",
        x:"-..-",
        y:"-.--",
        z:"--.."
    };
    return (new Set(words.map(s => s.split('').map(c => convenienceTable[c]).join('')))).size;
}