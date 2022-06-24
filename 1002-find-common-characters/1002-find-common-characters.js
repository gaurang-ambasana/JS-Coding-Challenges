/**
 * @param {string[]} words
 * @return {string[]}
 */
const commonChars = words => words.sort((a, b) => b.length - a.length).at(0).split(``).reduce((arr, c) => {
    let flag = true;
        
    for (const i in words) {
        if (!words[i].includes(c)) flag = false;
        words[i] = words[i].replace(c, ``);
    }
        
    flag && arr.push(c);
        
    return arr;
}, []);