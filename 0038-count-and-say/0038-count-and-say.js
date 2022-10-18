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
  let str = `1`;

  for (let i = 1; i < n; i++) 
      str = helper(str);

  return str;
};