const helper = (str: string): string => {
    const entries: Array<Array<number | string>> = [];
    let count: number = 1, prev: string = str[0];
    
    for (let i = 1, n = str.length + 1; i < n; i++) {
        const curr: string = str[i];

        if (prev === curr) count++;
        else {
            entries.push([count, prev]);
            prev = curr;
            count = 1;
        }
    }

    return entries.map((e) => e.join(``)).join(``);
};

const countAndSay = (n: string): string => {
    let str: string = `1`;
    
    for (let i = 1, x = parseInt(n); i < x; i++) 
        str = helper(str);
    
    return str;
};