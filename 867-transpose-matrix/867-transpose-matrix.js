/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const transpose = (matrix) => {
  const clone = matrix.map((e) => [...e]); // deep clone
  const res = [];
  const n = matrix.length;
  const m = matrix[0].length;

  if (n === m) {
    for (let i = 0; i < n; i++) {
      res[i] = clone.reduce((arr, row) => {
        arr.push(row[i]);
        return arr;
      }, []);
    }
  } else {
    for (let i = 0; i < m; i++) {
      res[i] = clone.reduce((arr, row) => {
        arr.push(row[i]);
        return arr;
      }, []);
    }
  }

  return res;
};