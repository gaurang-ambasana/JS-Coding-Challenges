/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let sum = 0;
  for (var i = 1; sum <= n; i++) sum += i;
  return i - 2;
};
