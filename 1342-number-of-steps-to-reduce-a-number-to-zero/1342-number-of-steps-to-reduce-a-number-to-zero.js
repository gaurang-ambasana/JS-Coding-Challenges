/**
 * @param {number} num
 * @param {number} steps (defaulted to 0)
 * @return {number}
 */
const numberOfSteps = (num, steps = 0) => {
    if (num !== 0) {
        if (num % 2 === 0) {
            steps++;
            return numberOfSteps(num / 2, steps);
        } else {
            steps++;
            return numberOfSteps(num - 1, steps);
        }
    }
    return steps;
};