/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = "";
  const strLengths = strs.map((s) => s.length);
  const minLen = Math.min(...strLengths);
  const shortestStr = strs[strLengths.indexOf(minLen)];

  for (let i = 1; i <= minLen; i++) {
    const prefix = shortestStr.substring(0, i);

    if (strs.every((s) => s.startsWith(prefix))) {
      if (result.length < prefix.length) {
        result = prefix;
      }
    }
  }

  return result;
};
