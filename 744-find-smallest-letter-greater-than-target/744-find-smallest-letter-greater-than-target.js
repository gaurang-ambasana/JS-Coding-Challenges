/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = (letters, target) => {
    const ans = letters.reduce((min, l) => l > target ? (min.length ? (l < min ? l : min) : l) : min, '');
    
    return ans.length ? ans : letters.at(0);
};