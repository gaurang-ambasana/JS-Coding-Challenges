/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const intMap = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
  };
  
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const int = intMap[s[i]];
    const nextInt = intMap[s[i+1]]
    
    if (int < nextInt) {
      result += nextInt - int;
      i++;
    } else result += int;
  }

  return result;
};