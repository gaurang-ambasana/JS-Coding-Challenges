/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    let rounds = 0;
    const taskCounter = tasks.reduce((counter, d) => (counter[d] = (counter[d] ?? 0) + 1, counter), {});
    
    for (const val of Object.values(taskCounter)) {
        if (val < 2) return -1;
        
        const count = Math.floor(val / 3);
        
        if (val % 3 !== 0) rounds += count + 1;
        else rounds += count;
    }    
    
    return rounds;
};