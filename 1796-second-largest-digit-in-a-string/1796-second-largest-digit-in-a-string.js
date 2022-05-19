/**
 * @param {string} s
 * @return {number}
 */
const secondHighest = (s) => {
    const numsInS = s.match(/\d/g);
    const nums = numsInS ? [...new Set(numsInS.join('').split(''))].sort((a, b) => b - a) : [];
    return nums.length > 1 ? nums[1] : -1;
};