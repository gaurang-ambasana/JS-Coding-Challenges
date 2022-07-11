/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
    const max = Math.max(...candies);
    return candies.map(c => c + extraCandies).map(n => n > max - 1);
};