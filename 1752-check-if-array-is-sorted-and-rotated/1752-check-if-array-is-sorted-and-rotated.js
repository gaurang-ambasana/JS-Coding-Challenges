/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  const rotateArr = (...arr) => {
    arr.unshift(arr.pop());
    return arr;
  };

  const sortedNums = [...nums].sort((a, b) => a - b);
  let rotatedArr = [...sortedNums];

  for (let i = 0; i < nums.length; i++) {
    rotatedArr = rotateArr(...rotatedArr);
    if (rotatedArr.every((ele, idx) => ele === nums[idx])) return true;
  }

  return false;
};
