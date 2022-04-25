/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  const nums = s
    .split(" ")
    .map(Number)
    .filter((e) => !isNaN(e));
  return (
    [...nums].sort((a, b) => a - b).every((ele, idx) => ele === nums[idx]) &&
    [...new Set(nums)].length === nums.length
  );
};
