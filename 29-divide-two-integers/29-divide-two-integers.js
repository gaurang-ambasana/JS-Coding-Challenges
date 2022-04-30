/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  const max = (2 ** 31) - 1;
  const min = -(2 ** 31);
    
  const res = parseInt(dividend / divisor);
    
  if(res > max) return max;
  if(res < min) return min;
    
  return res;
};