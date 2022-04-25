/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let len = Infinity;

  while (len !== s.length) {
    len = s.length;
    s = s.replace("()", "");
    s = s.replace("{}", "");
    s = s.replace("[]", "");
  }

  return s.length === 0;
};
