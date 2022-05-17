/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = nums => {
    const freqCounter = nums.reduce((counter, n) => (counter[n] = (counter[n] ?? 0) + 1, counter), {});
    return Object.keys(freqCounter).find(key => freqCounter[key] > nums.length / 2);
};