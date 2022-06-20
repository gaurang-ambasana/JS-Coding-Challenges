/**
 * @param {string[]} words
 * @return {number}
 */
const minimumLengthEncoding = words => {
    const set = new Set(words);
      set.forEach(word => {
        for (let i = 1; i < word.length; i++)
          set.delete(word.slice(i));
      });
    return [...set].join().length + 1;
};