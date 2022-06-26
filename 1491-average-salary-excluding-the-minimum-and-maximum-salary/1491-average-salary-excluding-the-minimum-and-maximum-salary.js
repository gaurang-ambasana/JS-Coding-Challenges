/**
 * @param {number[]} salary
 * @return {number}
 */
var average = (salary) => {
    const max = Math.max(...salary);
    const min = Math.min(...salary);
    
    salary.splice(salary.indexOf(max), 1);
    salary.splice(salary.indexOf(min), 1);
    
    return salary.reduce((sum, e) => sum + e, 0) / salary.length;
};