/**
 * @param {number[]} nums
 * @return {number}
 */
const countElements = nums => {
    return nums.sort((a, b) => b - a).reduce((count, ele, _, arr) => ele !== arr[0] && ele !== arr.at(-1) ? ++count : count, 0);
}