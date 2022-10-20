var intToRoman: Function = (num: number): string => {
  const result: Array<string> = [];

  const roman: Array<Array<string | number>> = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  for (let x = 0; num > 0; x++)
    while (num >= roman[x][1]) {
      num -= <number>roman[x][1];
      result.push(<string>roman[x][0]);
    }

  return result.join(``);
}