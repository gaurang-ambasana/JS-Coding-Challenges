/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    let rounds = 0;
    const taskCounter = getFreq(tasks);
    
    if (!Object.values(taskCounter).every(c => c > 1)) return -1;
    
    while (Object.values(taskCounter).some(c => c > 0)) {
        for (const key in taskCounter) {
            if (taskCounter[key] !== 0 && taskCounter[key] % 3 === 0) {
                taskCounter[key] -= 3;
                rounds++;
            } else if (taskCounter[key] !== 0) {
                taskCounter[key] -= 2;
                rounds++;
            }
        }
    }    
    
    return rounds;
};

const getFreq = (arr) => arr.reduce((counter, d) => (counter[d] = (counter[d] ?? 0) + 1, counter), {});