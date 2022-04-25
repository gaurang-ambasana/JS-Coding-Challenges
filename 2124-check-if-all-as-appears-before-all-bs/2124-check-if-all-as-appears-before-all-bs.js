/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
  return s.includes("a") && s.includes("b")
    ? s.lastIndexOf("a") < s.indexOf("b")
    : s.includes("a") || s.includes("b");
};
