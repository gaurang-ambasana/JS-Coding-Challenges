/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function(wordlist, queries) {
  const caseFix = (word) => word.toLowerCase();
  const repVowels = (word) => caseFix(word).replace(/[aeiou]/g, '_');
  const ogWordList = new Set(wordlist.reverse());
  const loweredList = wordlist.reduce((map, word) => (map[caseFix(word)] = word, map), {});
  const replacedList = wordlist.reduce((map, word) => (map[repVowels(word)] = word, map), {});
  return queries.map((word) => (
    ogWordList.has(word) && word ||
	loweredList[caseFix(word)] ||
	replacedList[repVowels(word)] ||
	''
  ));
};