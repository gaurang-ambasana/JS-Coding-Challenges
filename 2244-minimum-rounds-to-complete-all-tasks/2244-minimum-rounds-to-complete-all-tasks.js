/**
 * @param {number[]} tasks
 * @return {number}
 */
const minimumRounds = (tasks) => {
    let round = 0;
    const taskCounter = tasks.reduce((counter, d) => (counter[d] = (counter[d] ?? 0) + 1, counter), {});
    
    for (const val of Object.values(taskCounter)) {
        if (val < 2) return -1;
        
        const count = Math.floor(val / 3);
        
        if (val % 3 !== 0) round += count + 1;
        else round += count;
    }    
    
    return round;
};