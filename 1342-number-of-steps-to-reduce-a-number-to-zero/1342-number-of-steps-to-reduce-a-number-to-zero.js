/**
 * @param {number} num
 * @return {number}
 */
let numberOfSteps = (num, steps = 0) => {
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