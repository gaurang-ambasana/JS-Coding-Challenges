/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const isValidRow = (row) => Object.values(row.reduce((acc, n) => {
      if (n !== ".") acc[n] = (acc[n] ?? 0) + 1;
      return acc;
  }, {})).every((val) => val < 2);
    
  for (let i = 0; i < board.length; i++)
      if (!isValidRow(board[i])) return false;
    
  const columns = board.reduce((acc, row) => {
      row.forEach((e, i) => (acc[i] ? acc[i].push(e) : (acc[i] = [e])));
      return acc;
    }, []);
    
  for (let i = 0; i < columns.length; i++)
      if (!isValidRow(columns[i])) return false;
  
  const threeCols = board.reduce((acc, row) => {
    for (let i = 0; i < 3; i++)
      acc[i] ? acc[i].push(row.splice(0, 3)) : (acc[i] = [row.splice(0, 3)]);
    return acc;
  }, []);

  for (let i = 0; i < threeCols.length; i++)
    while (threeCols[i].length !== 0)
      if (!isValidRow([].concat(...threeCols[i].splice(0, 3)))) 
          return false;
    
  return true;
};