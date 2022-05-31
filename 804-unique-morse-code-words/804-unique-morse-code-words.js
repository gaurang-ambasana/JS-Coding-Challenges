/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = words => {
    const convenienceTable = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    return (new Set(words.map(s => s.split('').map(c => convenienceTable[parseInt(c.charCodeAt(0)) - 97]).join('')))).size;
}