/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  const prefix = word.substring(0, 1);
  const rest = word.substring(1, word.length);

  return (
    word === word.toUpperCase() ||
    word === word.toLowerCase() ||
    (prefix === prefix.toUpperCase() && rest === rest.toLowerCase())
  );
};
