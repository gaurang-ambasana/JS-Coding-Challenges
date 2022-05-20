/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    tasks.sort((a, b) => a - b);
    let rounds = 0;
    const taskCounter = tasks.reduce((counter, d) => (counter[d] = (counter[d] ?? 0) + 1, counter), {});
    
    if (Object.values(taskCounter).some(c => c < 2)) return -1;
    
    while (Object.values(taskCounter).some(c => c > 0)) {
        for (const key in taskCounter) {
            if (taskCounter[key] !== 0) {
                if (taskCounter[key] % 3 === 0) {
                    taskCounter[key] -= 3;
                    ++rounds;
                } else { 
                    taskCounter[key] -= 2;
                    ++rounds;
                }
            }
        }
    }    
    
    return rounds;
};