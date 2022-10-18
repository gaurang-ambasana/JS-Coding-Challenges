const helper = (str) => {
    const entries = [];
    let count = 1, prev = str[0];
    
    for (let i = 1, n = str.length + 1; i < n; i++) {
        const curr = str[i];

        if (prev === curr) count++;
        else {
            entries.push([count, prev]);
            prev = curr;
            count = 1;
        }
    }

    return entries.map(e => e.join(``)).join(``);
};

const countAndSay = (n) => {
  if (n == '1') return '1';
    
  let str = `11`;

  for (let i = 2; i < n; i++) 
      str = helper(str);

  return str;
};