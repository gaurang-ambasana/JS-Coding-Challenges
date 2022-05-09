/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  const isValidRow = (row) => Object.values(row.reduce((acc, n) => {
      if (n !== ".") acc[n] = (acc[n] ?? 0) + 1;
      return acc;
  }, {})).every((val) => val < 2);
    
  for (const row of board)
      if (!isValidRow(row)) return false;
    
  const columns = board.reduce((acc, row) => {
      row.forEach((e, i) => (acc[i] ? acc[i].push(e) : (acc[i] = [e])));
      return acc;
    }, []);
    
  for (const column of columns)
      if (!isValidRow(column)) return false;
  
  const threeCols = board.reduce((acc, row) => {
    for (let i = 0; i < 3; i++)
      acc[i] ? acc[i].push(row.splice(0, 3)) : (acc[i] = [row.splice(0, 3)]);
    return acc;
  }, []);

  for (const group of threeCols)
    while (group.length !== 0)
      if (!isValidRow([].concat(...group.splice(0, 3)))) 
          return false;
    
  return true;
};